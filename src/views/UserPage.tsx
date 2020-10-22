import React, { FC, useState, useEffect, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { UserPageTemplate } from 'templates';
import routes from 'routes';
import { getItems } from 'helpers/manageData';
import { useAuthContext } from 'context/AuthContext';

const WordsListPage = lazy(() => import('./WordsListPage'));
const FlashcardsPage = lazy(() => import('./FlashcardsPage'));
const GamePage = lazy(() => import('./GamePage'));
const GameStatsPage = lazy(() => import('./GameStatsPage'));
const ProfilePage = lazy(() => import('./ProfilePage'));

type ViewType = 'wordsList' | 'flashcards' | 'game' | 'gameStats' | 'profile';

const UserPage: FC = () => {
  const { pathname } = useLocation();
  const [viewType, setViewType] = useState<ViewType>('wordsList');

  useEffect(() => {
    switch (pathname) {
      case routes.wordsList:
        setViewType('wordsList');
        break;
      case routes.flashcards:
        setViewType('flashcards');
        break;
      case routes.game:
        setViewType('game');
        break;
      case routes.gameStats:
        setViewType('gameStats');
        break;
      case routes.profile:
        setViewType('profile');
        break;
      default:
        break;
    }
  }, [pathname]);

  const dispatch = useDispatch();
  const { userId }: any = useAuthContext();

  useEffect(() => {
    dispatch(getItems(userId));
  }, [dispatch, userId]);

  return (
    <UserPageTemplate viewType={viewType}>
      {viewType === 'wordsList' && <WordsListPage />}
      {viewType === 'flashcards' && <FlashcardsPage />}
      {viewType === 'game' && <GamePage />}
      {viewType === 'gameStats' && <GameStatsPage />}
      {viewType === 'profile' && <ProfilePage />}
    </UserPageTemplate>
  );
};

export default UserPage;
