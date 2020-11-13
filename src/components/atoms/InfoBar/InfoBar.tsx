import React, { FC } from 'react';

import { LoaderIcon, ErrorIcon, SettingsIcon } from 'assets';
import { StyledWrapper, StyledParagraph } from './InfoBar.styled';

interface InfoBarProps {
  icon?: 'loader' | 'error' | 'success';
}

const InfoBar: FC<InfoBarProps> = ({ children, icon }) => {
  return (
    <StyledWrapper>
      {icon === 'loader' && <LoaderIcon />}
      {icon === 'error' && <ErrorIcon />}
      {icon === 'success' && <SettingsIcon />}
      <StyledParagraph>{children}</StyledParagraph>
    </StyledWrapper>
  );
};

export default InfoBar;
