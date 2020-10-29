import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { WordsListPageTemplate } from 'templates';
import { Modal, Words, InfoBar } from 'components';
import { Portal } from 'utils/Portal';
import useWordsListPage from 'hooks/useWordsListPage';
import { selectWords, selectWordsLoading, selectWordsToRepeat } from 'data/slices/wordsSlice';

const WordsListPage: FC = () => {
  const words = useSelector(selectWords);
  const wordsToRepeat = useSelector(selectWordsToRepeat);
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
      {words.length === 0 && (
        <InfoBar icon="error">Add some words to use application features. 😉</InfoBar>
      )}
      {words.length !== 0 && wordsToRepeat.length === 0 && (
        <InfoBar icon="error">
          Uncheck the words you can&apos;t and you want to add to repeat. Click ✔ next to your word.
        </InfoBar>
      )}
      {wordsLoading ? (
        <InfoBar icon="loader">Loading words.</InfoBar>
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
