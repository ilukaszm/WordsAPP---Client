import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { WordsListPageTemplate } from 'templates';
import { Modal, Words } from 'components';
import { Portal } from 'utils/Portal';
import useWordListPage from 'hooks/useWordListPage';
import { selectWords, selectWordsLoading } from 'data/slices/wordsSlice';
import Spinner from 'utils/Spinner';

const WordsListPage: FC = () => {
  const words = useSelector(selectWords);
  const wordsLoading = useSelector(selectWordsLoading);

  const {
    searchValue,
    editedWord,
    isModalVisible,
    toggleAddWord,
    toggleModal,
    toggleEditingWord,
    handleChange,
  } = useWordListPage();

  return (
    <WordsListPageTemplate
      searchValue={searchValue}
      handleChangeFn={handleChange}
      toggleAddWord={toggleAddWord}
    >
      {wordsLoading ? (
        <Spinner />
      ) : (
        <Words searchValue={searchValue} toggleEditingWord={toggleEditingWord} words={words} />
      )}
      <Portal>
        <Modal visibility={isModalVisible} toggleModal={toggleModal} editedWord={editedWord} />
      </Portal>
    </WordsListPageTemplate>
  );
};

export default WordsListPage;
