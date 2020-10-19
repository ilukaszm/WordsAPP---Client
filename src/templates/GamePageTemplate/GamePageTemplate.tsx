import React, { FC, ChangeEvent, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Button } from 'components';
import gameImage from 'assets/images/game.svg';
import {
  StyledWrapper,
  StyledHeading,
  StyledButtonWrapper,
  StyledParagraph,
  StyledButtonLink,
  StyledImage,
  StyledProgressBar,
  StyledTextarea,
  AnswerMessage,
  GameButton,
  StyledGameButtonsWrapper,
} from './GamePageTemplate.styled';

interface Word {
  id: string;
  word: string;
  translation: string;
  toRepeat: boolean;
  gameId?: string;
}

interface GameProps {
  isGameLaunch: null | boolean;
  useWordsList: boolean;
  handleLaunchGame: () => void;
  handleChangeAnswer: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleCheckAnswer: (e?: any, buttonAnswer?: string) => void;
  setNextLevel: () => void;
  toggleUseWordsList: () => void;
  answerValue: string;
  activeLevelVariant: 'wordToTranslate' | 'translateToWord';
  activeWord: string;
  activeWordTranslation: string;
  answerIsCorrect: null | boolean;
  answersWords: Word[];
  gameProgress: number;
}

const TextField = styled.textarea``;

const GamePageTemplate: FC<GameProps> = ({
  isGameLaunch,
  handleLaunchGame,
  handleChangeAnswer,
  handleCheckAnswer,
  setNextLevel,
  activeWord,
  activeWordTranslation,
  activeLevelVariant,
  answerValue,
  answerIsCorrect,
  gameProgress,
  useWordsList,
  answersWords,
  toggleUseWordsList,
}) => {
  const primaryButton = useRef<HTMLButtonElement>(null);
  const textfield = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const setButtonClicked = (e: any) => {
      if (e.key === 'Enter') {
        primaryButton.current?.click();
        e.preventDefault();
      }
      textfield.current?.focus();
    };
    document.addEventListener('keydown', setButtonClicked);
    return () => document.removeEventListener('keydown', setButtonClicked);
  }, []);

  const renderGameType = () => {
    if (useWordsList) {
      return (
        <StyledGameButtonsWrapper>
          {answersWords.map(({ gameId, translation, word }) => {
            const buttonAnswer = activeLevelVariant === 'wordToTranslate' ? translation : word;
            return (
              <GameButton
                type="button"
                key={gameId}
                onClick={(e) => handleCheckAnswer(e, buttonAnswer)}
                variant="secondary"
              >
                {buttonAnswer}
              </GameButton>
            );
          })}
        </StyledGameButtonsWrapper>
      );
    }
    return (
      <TextField
        as={StyledTextarea}
        placeholder="type answer"
        value={answerValue}
        onChange={handleChangeAnswer}
        ref={textfield}
      />
    );
  };

  const renderContent = () => {
    switch (isGameLaunch) {
      case null:
        return (
          <StyledWrapper>
            <StyledHeading>Repeat game</StyledHeading>
            <StyledImage src={gameImage} alt="game" />
            <Button onClick={handleLaunchGame} buttonRef={primaryButton}>
              Play
            </Button>
          </StyledWrapper>
        );
      case true:
        return (
          <StyledWrapper>
            <StyledProgressBar percent={gameProgress} />
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
            {answerIsCorrect !== null ? (
              <AnswerMessage>
                {answerIsCorrect ? 'Good answer!' : 'Wrong answer! Correct answer:'}
                {!answerIsCorrect && <b>{activeWordTranslation}</b>}
                <span role="img" aria-label="emoji">
                  {answerIsCorrect ? '😃' : '🙁'}
                </span>
              </AnswerMessage>
            ) : (
              renderGameType()
            )}
            <StyledButtonLink onClick={toggleUseWordsList} list={!useWordsList}>
              {useWordsList ? 'use keyboard' : 'use word list'}
            </StyledButtonLink>
            <StyledButtonWrapper>
              <Button variant="secondary" onClick={setNextLevel}>
                Skip
              </Button>
              {answerIsCorrect === null ? (
                <Button onClick={handleCheckAnswer} buttonRef={primaryButton}>
                  Check
                </Button>
              ) : (
                <Button onClick={setNextLevel} buttonRef={primaryButton}>
                  Next
                </Button>
              )}
            </StyledButtonWrapper>
          </StyledWrapper>
        );
      case false:
        return (
          <StyledWrapper>
            <StyledHeading>
              You are better!
              <span role="img" aria-label="emoji">
                😊
              </span>
            </StyledHeading>
            <Button onClick={handleLaunchGame} buttonRef={primaryButton}>
              Play again
            </Button>
          </StyledWrapper>
        );
      default:
        return null;
    }
  };

  return renderContent();
};

export default GamePageTemplate;
