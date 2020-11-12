import React, { FC } from 'react';

import { Button, Card, InfoBar } from 'components';
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
  children,
}) => {
  if (!word) {
    return (
      <StyledWrapper>
        <InfoBar icon="error">You have to add some word to repeat to use flashcards.</InfoBar>
      </StyledWrapper>
    );
  }
  return (
    <StyledWrapper>
      Click on the card to rotate.
      <Card textFirst={word} textSecond={translation} />
      <StyledButtonWrapper>
        <Button variant="secondary" onClick={() => changeActiveWordFn('previous')}>
          Previous
        </Button>
        <Button onClick={() => changeActiveWordFn('next')}>Next</Button>
      </StyledButtonWrapper>
      {children}
    </StyledWrapper>
  );
};

export default FlashcardsPageTemplate;
