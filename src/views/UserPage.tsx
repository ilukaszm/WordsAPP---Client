import React, { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { UserPageTemplate } from 'templates';
import { WordsListPage, AddWordPage, GamePage } from 'views';
import routes from 'routes';

const UserPage: FC = () => {
  const { pathname } = useLocation();
  const [viewType, setViewType] = useState<'wordsList' | 'addWord' | 'game'>('wordsList');

  useEffect(() => {
    switch (pathname) {
      case routes.wordsList:
        setViewType('wordsList');
        break;
      case routes.addWord:
        setViewType('addWord');
        break;
      case routes.game:
        setViewType('game');
        break;
      default:
        break;
    }
  }, [pathname]);

  return (
    <UserPageTemplate viewType={viewType}>
      {viewType === 'wordsList' && <WordsListPage />}
      {viewType === 'addWord' && <AddWordPage />}
      {viewType === 'game' && <GamePage />}
    </UserPageTemplate>
  );
};

export default UserPage;
