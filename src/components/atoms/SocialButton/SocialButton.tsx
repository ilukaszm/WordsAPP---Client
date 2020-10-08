import React, { FC } from 'react';

import { FacebookIcon, GoogleIcon } from 'assets';
import StyledSocialButton from './SocialButton.styled';

interface SocialButtonProps {
  className?: string;
  onClick?: () => void;
  variant?: 'facebook' | 'google';
}

const SocialButton: FC<SocialButtonProps> = ({ className, onClick, variant }) => {
  return (
    <StyledSocialButton className={className} onClick={onClick} data-testid="social-button">
      {variant === 'facebook' && <FacebookIcon />}
      {variant === 'google' && <GoogleIcon />}
    </StyledSocialButton>
  );
};

SocialButton.defaultProps = {
  variant: 'facebook',
};

export default SocialButton;
