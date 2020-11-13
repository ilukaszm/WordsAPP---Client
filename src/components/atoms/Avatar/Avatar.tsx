import React, { FC } from 'react';

import { AvatarNoneIcon, SettingsIcon } from 'assets';
import { AvatarProps } from './Avatar.model';
import { StyledAvatar, StyledAvatarImage } from './Avatar.styled';

const Avatar: FC<AvatarProps> = ({ avatarURL, className }) => {
  return (
    <StyledAvatar className={className} data-testid="avatar">
      {avatarURL ? <StyledAvatarImage avatarURL={avatarURL} /> : <AvatarNoneIcon />}
      <SettingsIcon />
    </StyledAvatar>
  );
};

export default Avatar;
