import React, { FC, RefObject } from 'react';

import StyledButton from './Button.styled';

interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'submit' | 'reset' | 'button';
  buttonRef?: RefObject<HTMLButtonElement>;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ className, type, variant, children, onClick, buttonRef }) => (
  <StyledButton
    className={className}
    type={type}
    variant={variant}
    onClick={onClick}
    ref={buttonRef}
  >
    {children}
  </StyledButton>
);

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
