import React, { FC } from 'react';

import { WordsListPageTemplate } from 'templates';
import { Words, Modal } from 'components';
import { Portal } from 'utils/Portal';
import useWordListPage from 'hooks/useWordListPage';

const WordsListPage: FC = () => {
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
      <Words searchValue={searchValue} toggleEditingWord={toggleEditingWord} />
      <Portal>
        <Modal visibility={isModalVisible} toggleModal={toggleModal} editedWord={editedWord} />
      </Portal>
    </WordsListPageTemplate>
  );
};

export default WordsListPage;
