import React, { FC } from 'react';

import { StyledInfoBarWrapper } from './InfoBarWrapper.styled';

const InfoBarWrapper: FC = ({ children }) => {
  return <StyledInfoBarWrapper>{children}</StyledInfoBarWrapper>;
};

export default InfoBarWrapper;
