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

interface ProfilePageTemplateProps {
  handleImageAsFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFireBaseUpload: (e: any) => void;
  handleChangeSettings: () => void;
  handleChangeNumberOfLevels: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleGameSound: () => void;
  gameSound: boolean;
  numberOfLevels: number;
  avatarURL: string;
}

const ProfilePageTemplate: FC<ProfilePageTemplateProps> = ({
  handleImageAsFile,
  handleFireBaseUpload,
  handleChangeSettings,
  handleChangeNumberOfLevels,
  toggleGameSound,
  gameSound,
  numberOfLevels,
  avatarURL,
  children,
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
          name="maxNumbersOfLevels"
          id="maxNumbersOfLevels"
          defaultValue={numberOfLevels.toString()}
          onChange={handleChangeNumberOfLevels}
        />
      </div>
      <StyledButtonWrapper>
        <Button onClick={handleChangeSettings}>Save settings</Button>
      </StyledButtonWrapper>
      {children}
    </StyledWrapper>
  );
};

export default ProfilePageTemplate;
