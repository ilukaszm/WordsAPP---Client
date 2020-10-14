import React, { FC } from 'react';

import StyledButton from './Button.styled';

interface ButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ className, type, variant, children, onClick }) => (
  <StyledButton className={className} type={type} variant={variant} onClick={onClick}>
    {children}
  </StyledButton>
);

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
