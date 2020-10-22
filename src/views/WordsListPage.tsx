import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { WordsListPageTemplate } from 'templates';
import { Modal, Words } from 'components';
import { Portal } from 'utils/Portal';
import useWordsListPage from 'hooks/useWordsListPage';
import { selectWords, selectWordsLoading } from 'data/slices/wordsSlice';
import Spinner from 'utils/Spinner';

const WordsListPage: FC = () => {
  const words = useSelector(selectWords);
  const wordsLoading = useSelector(selectWordsLoading);

  const {
    searchValue,
    editedWord,
    isModalVisible,
    toggleModal,
    setAddingWordOnModal,
    setEditingWordOnModal,
    handleChange,
  } = useWordsListPage();

  return (
    <WordsListPageTemplate
      searchValue={searchValue}
      handleChangeFn={handleChange}
      setAddingWordOnModal={setAddingWordOnModal}
    >
      {wordsLoading ? (
        <Spinner />
      ) : (
        <Words
          searchValue={searchValue}
          setEditingWordOnModal={setEditingWordOnModal}
          words={words}
        />
      )}
      <Portal>
        <Modal visibility={isModalVisible} toggleModal={toggleModal} editedWord={editedWord} />
      </Portal>
    </WordsListPageTemplate>
  );
};

export default WordsListPage;
