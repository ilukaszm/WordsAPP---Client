import React, { FC, RefObject } from 'react';

import { useGameContext } from 'context/GameContext';
import { StyledGameButtonsWrapper, GameButton, StyledTextarea } from './GameInterface.styled';

interface GameInterfaceProps {
  textFieldRef?: RefObject<HTMLTextAreaElement>;
}
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
    <StyledTextarea
      placeholder="type answer"
      value={answerTextValue}
      onChange={handleChangeAnswer}
      ref={textFieldRef}
    />
  );
};

export default GameInterface;
