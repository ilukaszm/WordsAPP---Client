import styled from 'styled-components';

import { AvatarProps } from './Avatar.model';

export const StyledAvatar = styled.div`
  position: relative;
  display: block;
  cursor: pointer;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 69px;
    height: 69px;
  }

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledAvatarImage = styled.div<AvatarProps>`
  width: 52px;
  height: 52px;
  background-image: url(${({ avatarURL }) => avatarURL});
  background-size: cover;
  background-position: center;

  ${({ theme: { devices } }) => devices.tablet} {
    width: 69px;
    height: 69px;
  }
`;
