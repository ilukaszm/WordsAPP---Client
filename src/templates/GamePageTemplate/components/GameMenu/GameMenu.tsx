import React, { FC, RefObject } from 'react';
import { Link } from 'react-router-dom';

import { Button, InfoBar } from 'components';
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
          <StyledButtonLink to={routes.gameStats} as={Link}>
            Game stats
          </StyledButtonLink>
          <Button onClick={handleLaunchGame} buttonRef={buttonRef}>
            Play
          </Button>
        </>
      ) : (
        <InfoBar icon="error">
          You must have a number of words to repeat bigger than the number of levels setting by you.
          Add more words to repeat in the list or change your settings to play.{' '}
          <span role="img" aria-label="emoji with face rolling eyes">
            🙄
          </span>
        </InfoBar>
      )}
    </StyledWrapper>
  );
};

export default GameMenu;
