import React, { FC } from 'react';

import StyledParagraph from './Paragraph.styled';

interface ParagraphProps {
  className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ className, children }) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

export default Paragraph;
