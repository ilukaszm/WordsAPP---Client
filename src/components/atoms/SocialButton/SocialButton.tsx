import React, { FC } from 'react';

import { FacebookIcon, GoogleIcon } from 'assets';
import StyledSocialButton from './SocialButton.styled';

interface SocialButtonProps {
  className?: string;
  variant?: string;
}

const SocialButton: FC<SocialButtonProps> = ({ className, variant }) => {
  return (
    <StyledSocialButton className={className} data-testid="social-button">
      {variant === 'facebook' && <FacebookIcon />}
      {variant === 'google' && <GoogleIcon />}
    </StyledSocialButton>
  );
};

SocialButton.defaultProps = {
  variant: 'facebook',
};

export default SocialButton;
