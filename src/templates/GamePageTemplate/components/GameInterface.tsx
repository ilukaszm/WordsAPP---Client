import React, { FC, RefObject } from 'react';
import styled from 'styled-components';

import { useGameContext } from 'context/GameContext';
import { StyledGameButtonsWrapper, GameButton, StyledTextarea } from '../GamePageTemplate.styled';

interface GameInterfaceProps {
  textFieldRef?: RefObject<HTMLTextAreaElement>;
}

const TextField = styled.textarea``;

const GameInterface: FC<GameInterfaceProps> = ({ textFieldRef }) => {
  const {
    useWordsList,
    answerTextValue,
    answersWords,
    activeLevelVariant,
    handleChangeAnswer,
    handleCheckAnswer,
  } = useGameContext();

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
      value={answerTextValue}
      onChange={handleChangeAnswer}
      ref={textFieldRef}
    />
  );
};

export default GameInterface;
