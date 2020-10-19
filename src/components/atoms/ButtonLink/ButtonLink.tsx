import React, { FC } from 'react';

import { StyledButtonLink, StyledButton } from './ButtonLink.styled';

interface ButtonLinkProps {
  className?: string;
  onClick?: (e?: any) => void;
}

const ButtonLink: FC<ButtonLinkProps> = ({ className, children, onClick }) => {
  return (
    <>
      {onClick ? (
        <StyledButton onClick={onClick} className={className}>
          {children}
        </StyledButton>
      ) : (
        <StyledButtonLink className={className}>{children}</StyledButtonLink>
      )}
    </>
  );
};

export default ButtonLink;
