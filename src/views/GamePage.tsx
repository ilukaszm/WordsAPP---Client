import React, { FC } from 'react';

import GameProvider from 'context/GameContext';
import { GamePageTemplate } from 'templates';

const GamePage: FC = () => {
  return (
    <GameProvider>
      <GamePageTemplate />
    </GameProvider>
  );
};

export default GamePage;
