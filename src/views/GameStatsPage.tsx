import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getGameStats } from 'helpers/manageData';
import { GameStatsPageTemplate } from 'templates';
import {
  selectGameStats,
  selectGameStatsLoading,
  selectGameStatsErrors,
} from 'data/slices/gameStatsSlice';
import { InfoBar } from 'components';
import Spinner from 'utils/Spinner';

const GameStatsPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameStats());
  }, [dispatch]);

  const gameStats = useSelector(selectGameStats);
  const gameStatsLoading = useSelector(selectGameStatsLoading);
  const gameStatsErrors = useSelector(selectGameStatsErrors);

  return (
    <GameStatsPageTemplate gameStats={gameStats}>
      {gameStatsLoading && <Spinner />}
      {gameStatsErrors && (
        <InfoBar icon="error">Oops! Something went wrong. Try again later.</InfoBar>
      )}
    </GameStatsPageTemplate>
  );
};

export default GameStatsPage;
