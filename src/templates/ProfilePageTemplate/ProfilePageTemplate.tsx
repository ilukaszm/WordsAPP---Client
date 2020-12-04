import React, { FC, ChangeEvent } from 'react';

import { Button, Avatar, Paragraph, Input } from 'components';
import {
  StyledWrapper,
  StyledCheckbox,
  StyledHeading,
  InnerWrapper,
  StyledButtonWrapper,
  StyledUploadButton,
  StyledFileInput,
  StyledParagraph,
} from './ProfilePageTemplate.styled';

interface ProfilePageTemplateProps {
  handleImageAsFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFireBaseUpload: (e: any) => void;
  handleChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeSettings: () => void;
  handleChangeNumberOfLevels: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleGameSound: () => void;
  currentEmail: string;
  gameSound: boolean;
  numberOfLevels: string;
  currentNumberOfLevels: number;
  avatarURL: string;
  password: string;
  email: string;
}

const ProfilePageTemplate: FC<ProfilePageTemplateProps> = ({
  handleImageAsFile,
  handleFireBaseUpload,
  handleChangePassword,
  handleChangeEmail,
  handleChangeSettings,
  handleChangeNumberOfLevels,
  toggleGameSound,
  currentEmail,
  gameSound,
  numberOfLevels,
  currentNumberOfLevels,
  avatarURL,
  password,
  email,
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
      <InnerWrapper>
        <StyledHeading>Game settings:</StyledHeading>
        <StyledCheckbox
          label="Game sound"
          id="sound"
          name="sound"
          checked={gameSound}
          onChange={toggleGameSound}
        />
        <StyledParagraph>
          Number of levels: <b>{currentNumberOfLevels}</b>
        </StyledParagraph>
        <Input
          type="text"
          label="Change number of levels"
          name="maxNumberOfLevels"
          id="maxNumberOfLevels"
          value={numberOfLevels}
          onChange={handleChangeNumberOfLevels}
        />
      </InnerWrapper>
      <InnerWrapper>
        <StyledHeading>Password settings:</StyledHeading>
        <Input
          type="password"
          label="New password"
          name="password"
          id="password"
          value={password}
          onChange={handleChangePassword}
        />
      </InnerWrapper>
      <InnerWrapper>
        <StyledHeading>Email settings:</StyledHeading>
        <StyledParagraph>
          Current email address: <b>{currentEmail}</b>
        </StyledParagraph>
        <Input
          type="email"
          label="New email address"
          name="email"
          id="email"
          value={email}
          onChange={handleChangeEmail}
        />
      </InnerWrapper>
      <StyledButtonWrapper>
        <Button onClick={handleChangeSettings}>Save settings</Button>
      </StyledButtonWrapper>
      {children}
    </StyledWrapper>
  );
};

export default ProfilePageTemplate;
