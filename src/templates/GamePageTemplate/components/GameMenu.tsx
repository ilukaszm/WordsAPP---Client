import React, { FC, RefObject } from 'react';

import { Button } from 'components';
import gameImage from 'assets/images/game.svg';
import { useGameContext } from 'context/GameContext';
import { StyledWrapper, StyledImage } from '../GamePageTemplate.styled';

interface GameMenuProps {
  buttonRef?: RefObject<HTMLButtonElement>;
}

const GameMenu: FC<GameMenuProps> = ({ buttonRef }) => {
  const { handleLaunchGame } = useGameContext();

  return (
    <StyledWrapper>
      <StyledImage src={gameImage} alt="game" />
      <Button onClick={handleLaunchGame} buttonRef={buttonRef}>
        Play
      </Button>
    </StyledWrapper>
  );
};

export default GameMenu;
