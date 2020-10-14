import React, { FC } from 'react';

import { Button, Card, Paragraph } from 'components';
import { StyledWrapper, StyledButtonWrapper } from './FlashcardsPageTemplate.styled';

interface FlashcardsPageTemplateProps {
  word: string;
  translation: string;
  changeActiveWordFn: (type: 'next' | 'previous') => void;
}

const FlashcardsPageTemplate: FC<FlashcardsPageTemplateProps> = ({
  word,
  translation,
  changeActiveWordFn,
}) => {
  if (!word) {
    return (
      <StyledWrapper>
        <Paragraph>You have to add some word to repeat to use flashcards.</Paragraph>
      </StyledWrapper>
    );
  }
  return (
    <StyledWrapper>
      <Paragraph>Click on card to rotate</Paragraph>
      <Card textFirst={word} textSecond={translation} />
      <StyledButtonWrapper>
        <Button variant="secondary" onClick={() => changeActiveWordFn('previous')}>
          Previous
        </Button>
        <Button onClick={() => changeActiveWordFn('next')}>Next</Button>
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default FlashcardsPageTemplate;
