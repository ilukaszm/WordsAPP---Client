import React, { FC } from 'react';

import StyledButton from './Button.styled';

interface ButtonProps {
  className?: string;
}

const Button: FC<ButtonProps> = ({ className, children }) => (
  <StyledButton className={className}>{children}</StyledButton>
);

export default Button;
