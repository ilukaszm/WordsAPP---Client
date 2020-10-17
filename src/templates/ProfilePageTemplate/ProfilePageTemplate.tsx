import React, { FC, ChangeEvent } from 'react';

import { Button, Avatar, Paragraph } from 'components';
import {
  StyledWrapper,
  StyledCheckbox,
  StyledHeading,
  InnerWrapper,
  StyledButtonWrapper,
  StyledInput,
  StyledUploadButton,
  StyledFileInput,
} from './ProfilePageTemplate.styled';

interface ProfilePageProps {
  handleImageAsFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFireBaseUpload: (e: any) => void;
  handleChangeSettings: () => void;
  handleChangeNumberOfLevels: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleGameSound: () => void;
  gameSound: boolean;
  numberOfLevels: string;
  avatarURL: string;
}

const ProfilePage: FC<ProfilePageProps> = ({
  handleImageAsFile,
  handleFireBaseUpload,
  handleChangeSettings,
  handleChangeNumberOfLevels,
  toggleGameSound,
  gameSound,
  numberOfLevels,
  avatarURL,
}) => {
  return (
    <StyledWrapper>
      <InnerWrapper>
        <StyledHeading>Profile settings:</StyledHeading>
        <Paragraph>Your avatar:</Paragraph>
        <Avatar avatarURL={avatarURL} />
        <form onSubmit={handleFireBaseUpload}>
          <StyledFileInput
            type="file"
            onChange={handleImageAsFile}
            accept="image/png, image/jpeg"
          />
          <StyledUploadButton type="submit">Upload</StyledUploadButton>
        </form>
      </InnerWrapper>
      <div>
        <StyledHeading>Game settings:</StyledHeading>
        <StyledCheckbox
          label="Game sound"
          id="sound"
          name="sound"
          checked={gameSound}
          onChange={toggleGameSound}
        />
        <StyledInput
          type="text"
          label="Max numbers of level"
          defaultValue={numberOfLevels}
          onChange={handleChangeNumberOfLevels}
        />
      </div>
      <StyledButtonWrapper>
        <Button onClick={handleChangeSettings}>Save settings</Button>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default ProfilePage;
