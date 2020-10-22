import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGameStats } from 'helpers/manageData';
import { GameStatsPageTemplate } from 'templates';
import { selectGameStats } from 'data/slices/gameStatsSlice';

const GameStatsPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameStats());
  }, [dispatch]);

  const gameStats = useSelector(selectGameStats);

  return <GameStatsPageTemplate gameStats={gameStats} />;
};

export default GameStatsPage;
