import React, { FC } from 'react';

import StyledButtonLink from './ButtonLink.styled';

interface ButtonLinkProps {
  className?: string;
}

const ButtonLink: FC<ButtonLinkProps> = ({ className, children }) => {
  return <StyledButtonLink className={className}>{children}</StyledButtonLink>;
};

export default ButtonLink;
