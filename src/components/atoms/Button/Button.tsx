import React, { FC } from 'react';

import StyledButton from './Button.styled';

interface Props {
  className?: string;
  small?: boolean;
}

const Button: FC<Props> = ({ className, children, small }) => (
  <StyledButton className={className} small={small}>
    {children}
  </StyledButton>
);

export default Button;
