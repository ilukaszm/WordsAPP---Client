import React, { FC, RefObject } from 'react';

import { Button } from 'components';
import { useGameContext } from 'context/GameContext';
import {
  StyledWrapper,
  StyledButtonWrapper,
  StyledParagraph,
  StyledButtonLink,
  StyledProgressBar,
  GameInfoWrapper,
  AnswerMessage,
} from '../GamePageTemplate.styled';
import GameInterface from './GameInterface';

interface GameProps {
  buttonRef?: RefObject<HTMLButtonElement>;
  textFieldRef?: RefObject<HTMLTextAreaElement>;
}

const Game: FC<GameProps> = ({ buttonRef, textFieldRef }) => {
  const {
    handleCheckAnswer,
    setNextLevel,
    activeWord,
    activeWordTranslation,
    activeLevelVariant,
    gamePoints,
    answerIsCorrect,
    gameProgress,
    useWordsList,
    toggleUseWordsList,
  } = useGameContext();

  return (
    <StyledWrapper>
      <StyledProgressBar percent={gameProgress} />
      <GameInfoWrapper>
        {activeLevelVariant === 'wordToTranslate' && (
          <StyledParagraph>
            Translate: <b>{activeWord}</b>
          </StyledParagraph>
        )}
        {activeLevelVariant === 'translateToWord' && (
          <StyledParagraph>
            Translate: <b>{activeWordTranslation}</b>
          </StyledParagraph>
        )}
        <StyledParagraph>Points: {gamePoints}</StyledParagraph>
      </GameInfoWrapper>
      {answerIsCorrect !== null ? (
        <AnswerMessage>
          {answerIsCorrect ? 'Good answer!' : 'Wrong answer! Correct answer:'}
          {!answerIsCorrect && <b>{activeWordTranslation}</b>}
          <span role="img" aria-label="emoji">
            {answerIsCorrect ? '😃' : '🙁'}
          </span>
        </AnswerMessage>
      ) : (
        <GameInterface textFieldRef={textFieldRef} />
      )}
      <StyledButtonLink onClick={toggleUseWordsList} list={!useWordsList}>
        {useWordsList ? 'use keyboard' : 'use word list'}
      </StyledButtonLink>
      <StyledButtonWrapper>
        <Button variant="secondary" onClick={setNextLevel}>
          Skip
        </Button>
        {answerIsCorrect === null ? (
          <Button onClick={handleCheckAnswer} buttonRef={buttonRef}>
            Check
          </Button>
        ) : (
          <Button onClick={setNextLevel} buttonRef={buttonRef}>
            Next
          </Button>
        )}
      </StyledButtonWrapper>
    </StyledWrapper>
  );
};

export default Game;
