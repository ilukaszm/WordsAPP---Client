import React, { FC, RefObject } from 'react';

import { Button } from 'components';
import { useGameContext } from 'context/GameContext';
import { StyledWrapper, StyledHeading } from '../GamePageTemplate.styled';

interface GameEndProps {
  buttonRef?: RefObject<HTMLButtonElement>;
}

const GameEnd: FC<GameEndProps> = ({ buttonRef }) => {
  const { handleLaunchGame } = useGameContext();

  return (
    <StyledWrapper>
      <StyledHeading>
        You are better!
        <span role="img" aria-label="emoji">
          😊
        </span>
      </StyledHeading>
      <Button onClick={handleLaunchGame} buttonRef={buttonRef}>
        Play again
      </Button>
    </StyledWrapper>
  );
};

export default GameEnd;
