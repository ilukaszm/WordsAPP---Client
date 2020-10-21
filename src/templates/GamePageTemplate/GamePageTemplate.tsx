import React, { FC, useRef, useEffect } from 'react';

import { useGameContext } from 'context/GameContext';
import GameMenu from './components/GameMenu';
import Game from './components/Game';
import GameEnd from './components/GameEnd';

const GamePageTemplate: FC = () => {
  const { isGameLaunch } = useGameContext();

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

  const renderContent = () => {
    switch (isGameLaunch) {
      case null:
        return <GameMenu buttonRef={primaryButton} />;
      case true:
        return <Game buttonRef={primaryButton} textFieldRef={textfield} />;
      case false:
        return <GameEnd buttonRef={primaryButton} />;
      default:
        return null;
    }
  };

  return renderContent();
};

export default GamePageTemplate;
