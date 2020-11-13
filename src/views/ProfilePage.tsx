import React, { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProfilePageTemplate } from 'templates';
import { useAuthContext } from 'context/AuthContext';
import { storage, auth } from 'services/firebase';
import { updateUserProfile, getUserProfile } from 'helpers/manageData';
import {
  selectUserProfile,
  selectUserProfileLoading,
  selectUserProfileHasErrors,
} from 'data/slices/userProfileSlice';
import { InfoBar, InfoBarWrapper } from 'components';
import Spinner from 'utils/Spinner';

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { userId } = useAuthContext();
  const user = auth().currentUser;

  const profileData = useSelector(selectUserProfile);
  const profileDataLoading = useSelector(selectUserProfileLoading);
  const profileDataErrors = useSelector(selectUserProfileHasErrors);

  const [imageAsFile, setImageAsFile] = useState<File>();
  const [imageAsUrl, setImageAsUrl] = useState('');
  const [gameSound, setgameSound] = useState(false);
  const [numberOfLevels, setNumberOfLevels] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [serverErrorPassword, setServerErrorPassword] = useState('');
  const [serverErrorEmail, setServerErrorEmail] = useState('');

  useEffect(() => {
    setImageAsUrl(profileData?.avatarURL);
    setgameSound(profileData?.gameSound);
  }, [profileData, userId]);

  const handleImageAsFile = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target?.files?.[0];
    if (image) {
      setImageAsFile(image);
    }
  };

  const handleFireBaseUpload = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadAvatar = async () => {
      let uploadAvatar;
      if (imageAsFile) {
        uploadAvatar = await storage.ref(`/avatars/${userId}`).put(imageAsFile);
        if (uploadAvatar) {
          const getAvatarURL = async () => {
            const avatarURL = await storage.ref('avatars').child(userId).getDownloadURL();
            if (avatarURL) {
              setImageAsUrl(avatarURL);
            }
          };
          getAvatarURL();
        }
      }
    };
    uploadAvatar();
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmailAddress = e.target.value;
    setEmail(newEmailAddress);
  };

  const handleChangeSettings = () => {
    const avatarURL = imageAsUrl && imageAsUrl;
    const newData = { avatarURL, gameSound, numberOfLevels: Number(numberOfLevels) };

    if (Number(numberOfLevels) >= 5) {
      updateUserProfile(userId, newData);
    }
    if (password !== '') {
      const updateUserPassword = async () => {
        try {
          await user?.updatePassword(password);
          setEmail(user?.email || '');
          setServerErrorPassword('');
        } catch (error) {
          setServerErrorPassword(error.message);
        }
      };

      updateUserPassword();
    }
    if (email !== '') {
      const updateUserEmail = async () => {
        try {
          await user?.updateEmail(email);
          setServerErrorEmail('');
        } catch (error) {
          setServerErrorEmail(error.message);
        }
      };

      updateUserEmail();
    }

    dispatch(getUserProfile(userId));
  };

  const toggleGameSound = () => {
    setgameSound((prevState) => !prevState);
  };

  const handleChangeNumberOfLevels = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const express = new RegExp(/^[A-Z]+$/i);
    const newValueHasLetters = express.test(newValue);

    if (newValueHasLetters) {
      setNumberOfLevels('');
    } else {
      setNumberOfLevels(newValue);
    }
  };
  return (
    <ProfilePageTemplate
      handleImageAsFile={handleImageAsFile}
      handleFireBaseUpload={handleFireBaseUpload}
      handleChangePassword={handleChangePassword}
      handleChangeEmail={handleChangeEmail}
      handleChangeSettings={handleChangeSettings}
      handleChangeNumberOfLevels={handleChangeNumberOfLevels}
      toggleGameSound={toggleGameSound}
      gameSound={gameSound}
      numberOfLevels={numberOfLevels}
      currentNumberOfLevels={profileData?.numberOfLevels}
      currentEmail={user?.email || ''}
      avatarURL={imageAsUrl}
      password={password}
      email={email}
    >
      {profileDataLoading && <Spinner />}
      <InfoBarWrapper>
        {profileDataErrors && (
          <InfoBar icon="error">Oops! Something went wrong. Try again later.</InfoBar>
        )}
        {numberOfLevels !== '' && Number(numberOfLevels) < 5 && (
          <InfoBar icon="error">Numbers of level must be minimum: 5</InfoBar>
        )}
        {serverErrorPassword && <InfoBar icon="error">{serverErrorPassword}</InfoBar>}
        {serverErrorEmail && <InfoBar icon="error">{serverErrorEmail}</InfoBar>}
      </InfoBarWrapper>
    </ProfilePageTemplate>
  );
};

export default ProfilePage;
