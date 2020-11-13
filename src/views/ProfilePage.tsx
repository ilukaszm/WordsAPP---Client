import React, { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProfilePageTemplate } from 'templates';
import { useAuthContext } from 'context/AuthContext';
import { storage } from 'services/firebase';
import { updateUserProfile, getUserProfile } from 'helpers/manageData';
import {
  selectUserProfile,
  selectUserProfileLoading,
  selectUserProfileHasErrors,
} from 'data/slices/userProfileSlice';
import { InfoBar } from 'components';
import Spinner from 'utils/Spinner';

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { userId } = useAuthContext();

  const profileData = useSelector(selectUserProfile);
  const profileDataLoading = useSelector(selectUserProfileLoading);
  const profileDataErrors = useSelector(selectUserProfileHasErrors);

  const [imageAsFile, setImageAsFile] = useState<File>();
  const [imageAsUrl, setImageAsUrl] = useState('');
  const [gameSound, setgameSound] = useState(false);
  const [numberOfLevels, setnumberOfLevels] = useState(10);

  useEffect(() => {
    setImageAsUrl(profileData?.avatarURL);
    setgameSound(profileData?.gameSound);
    setnumberOfLevels(profileData?.numberOfLevels);
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

  const handleChangeSettings = () => {
    const avatarURL = imageAsUrl && imageAsUrl;

    const newData = { avatarURL, gameSound, numberOfLevels };

    if (numberOfLevels >= 5) {
      updateUserProfile(userId, newData);
      dispatch(getUserProfile(userId));
    }
  };

  const toggleGameSound = () => {
    setgameSound((prevState) => !prevState);
  };

  const handleChangeNumberOfLevels = (e: ChangeEvent<HTMLInputElement>) => {
    setnumberOfLevels(Number(e.target.value));
  };
  return (
    <ProfilePageTemplate
      handleImageAsFile={handleImageAsFile}
      handleFireBaseUpload={handleFireBaseUpload}
      handleChangeSettings={handleChangeSettings}
      handleChangeNumberOfLevels={handleChangeNumberOfLevels}
      toggleGameSound={toggleGameSound}
      gameSound={gameSound}
      numberOfLevels={numberOfLevels}
      avatarURL={imageAsUrl}
    >
      {profileDataLoading && <Spinner />}
      {profileDataErrors && (
        <InfoBar icon="error">Oops! Something went wrong. Try again later.</InfoBar>
      )}
      {Number(numberOfLevels) < 5 && (
        <InfoBar icon="error">Numbers of level must be minimum: 5</InfoBar>
      )}
    </ProfilePageTemplate>
  );
};

export default ProfilePage;
