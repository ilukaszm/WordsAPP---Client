import React, { FC, useState, useEffect, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { UserPageTemplate } from 'templates';
import routes from 'routes';
import { getItems } from 'helpers/manageData';
import { useAuthContext } from 'contexts/AuthContext';

const WordsListPage = lazy(() => import('./WordsListPage'));
const FlashcardsPage = lazy(() => import('./FlashcardsPage'));
const GamePage = lazy(() => import('./GamePage'));

const UserPage: FC = () => {
  const { pathname } = useLocation();
  const [viewType, setViewType] = useState<'wordsList' | 'flashcards' | 'game'>('wordsList');

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
    </UserPageTemplate>
  );
};

export default UserPage;
