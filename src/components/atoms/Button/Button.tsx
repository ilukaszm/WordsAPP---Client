import React, { FC } from 'react';

import StyledButton from './Button.styled';

interface ButtonProps {
  className?: string;
  type?: 'submit' | 'reset' | 'button';
}

const Button: FC<ButtonProps> = ({ className, type, children }) => (
  <StyledButton className={className} type={type}>
    {children}
  </StyledButton>
);

export default Button;
