import React, { FC, RefObject } from 'react';
import { Link } from 'react-router-dom';

import { Button, Paragraph } from 'components';
import gameImage from 'assets/images/game.svg';
import { useGameContext } from 'context/GameContext';
import routes from 'routes';
import { StyledWrapper, StyledImage, StyledButtonLink } from './GameMenu.styled';

interface GameMenuProps {
  buttonRef?: RefObject<HTMLButtonElement>;
}

const GameMenu: FC<GameMenuProps> = ({ buttonRef }) => {
  const { handleLaunchGame, isConfirmNumberOfWords } = useGameContext();

  return (
    <StyledWrapper>
      {isConfirmNumberOfWords() ? (
        <>
          <StyledImage src={gameImage} alt="game" />
          <StyledButtonLink>
            <Link to={routes.gameStats}>Game stats</Link>
          </StyledButtonLink>
          <Button onClick={handleLaunchGame} buttonRef={buttonRef}>
            Play
          </Button>
        </>
      ) : (
        <Paragraph>
          You must have a number of words to repeat bigger than the number of levels setting by you.
          Add more words or change your settings to play.{' '}
          <span role="img" aria-label="emoji">
            🙄
          </span>
        </Paragraph>
      )}
    </StyledWrapper>
  );
};

export default GameMenu;
