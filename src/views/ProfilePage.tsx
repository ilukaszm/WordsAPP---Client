import React, { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProfilePageTemplate } from 'templates';
import { useAuthContext } from 'context/AuthContext';
import { storage } from 'services/firebase';
import { updateUserProfile, getUserProfile } from 'helpers/manageData';
import { selectUserProfile } from 'data/slices/userProfileSlice';

const ProfilePage: FC = () => {
  const dispatch = useDispatch();
  const { userId } = useAuthContext();

  const profileData = useSelector(selectUserProfile);

  const [imageAsFile, setImageAsFile] = useState<File>();
  const [imageAsUrl, setImageAsUrl] = useState('');
  const [gameSound, setgameSound] = useState(false);
  const [numberOfLevels, setnumberOfLevels] = useState('10');

  useEffect(() => {
    setImageAsUrl(profileData?.avatarURL);
    setgameSound(profileData?.gameSound);
    setnumberOfLevels(profileData?.numberOfLevels);
  }, [profileData, userId]);

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, [userId, dispatch]);

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
    updateUserProfile(userId, newData);
    dispatch(getUserProfile(userId));
  };

  const toggleGameSound = () => {
    setgameSound((prevState) => !prevState);
  };

  const handleChangeNumberOfLevels = (e: ChangeEvent<HTMLInputElement>) => {
    setnumberOfLevels(e.target.value);
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
    />
  );
};

export default ProfilePage;
