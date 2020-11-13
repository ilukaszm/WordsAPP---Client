import React, { FC } from 'react';

import LogoSmallImage from 'assets/images/logoSmall.svg';
import LogoBigImage from 'assets/images/logoBig.svg';
import { StyledLogoSmall, StyledLogoBig } from './Logo.styled';

interface LogoProps {
  className?: string;
  variant?: 'small' | 'big';
}

const Logo: FC<LogoProps> = ({ className, variant }) => {
  return (
    <>
      {variant === 'small' && (
        <StyledLogoSmall
          className={className}
          src={LogoSmallImage}
          alt="logo wordsapp"
          data-testid="logo-small"
        />
      )}
      {variant === 'big' && (
        <StyledLogoBig className={className} src={LogoBigImage} alt="logo" data-testid="logo-big" />
      )}
    </>
  );
};

Logo.defaultProps = {
  variant: 'small',
};

export default Logo;
