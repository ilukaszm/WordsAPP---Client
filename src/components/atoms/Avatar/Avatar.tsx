import React, { FC } from 'react';

import { AvatarNoneIcon } from 'assets';
import { AvatarProps } from './Avatar.model';
import { StyledAvatar, StyledAvatarImage } from './Avatar.styled';

const Avatar: FC<AvatarProps> = ({ avatarURL }) => {
  return (
    <StyledAvatar data-testid="avatar">
      {avatarURL ? <StyledAvatarImage avatarURL={avatarURL} /> : <AvatarNoneIcon />}
    </StyledAvatar>
  );
};

export default Avatar;
