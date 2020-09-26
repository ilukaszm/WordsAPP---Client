import React, { FC } from 'react';

import StyledHeading from './Heading.styled';

interface HeadingProps {
  className?: string;
}

const Heading: FC<HeadingProps> = ({ className, children }) => {
  return <StyledHeading className={className}>{children}</StyledHeading>;
};

export default Heading;
