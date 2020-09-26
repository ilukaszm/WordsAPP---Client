import React, { FC } from 'react';

import LogoSmallImage from 'assets/images/logoSmall.svg';
import LogoBigImage from 'assets/images/logoBig.svg';
import { StyledLogoSmall, StyledLogoBig } from './Logo.styled';

interface LogoProps {
  variant?: 'small' | 'big';
}

const Logo: FC<LogoProps> = ({ variant }) => {
  return (
    <>
      {variant === 'small' && (
        <StyledLogoSmall src={LogoSmallImage} alt="logo" data-testid="logo-small" />
      )}
      {variant === 'big' && <StyledLogoBig src={LogoBigImage} alt="logo" data-testid="logo-big" />}
    </>
  );
};

Logo.defaultProps = {
  variant: 'small',
};

export default Logo;
