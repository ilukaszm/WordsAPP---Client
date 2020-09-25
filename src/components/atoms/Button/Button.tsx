import React, { FC } from 'react';

import StyledButton from './Button.styled';

interface ButtonProps {
  className?: string;
  small?: boolean;
}

const Button: FC<ButtonProps> = ({ className, children, small }) => (
  <StyledButton className={className} small={small}>
    {children}
  </StyledButton>
);

export default Button;
