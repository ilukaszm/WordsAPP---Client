import React, { FC, RefObject } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'components';
import { useGameContext } from 'context/GameContext';
import routes from 'routes';
import { StyledWrapper, StyledHeading, StyledButtonLink } from './GameEnd.styled';

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
      <StyledButtonLink>
        <Link to={routes.gameStats}>Game stats</Link>
      </StyledButtonLink>
      <Button onClick={handleLaunchGame} buttonRef={buttonRef}>
        Play again
      </Button>
    </StyledWrapper>
  );
};

export default GameEnd;
