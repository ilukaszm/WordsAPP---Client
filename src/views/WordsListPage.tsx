import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { WordsListPageTemplate } from 'templates';
import { Modal, Words, InfoBar } from 'components';
import { Portal } from 'utils/Portal';
import useWordsListPage from 'hooks/useWordsListPage';
import {
  selectWords,
  selectWordsLoading,
  selectWordsToRepeat,
  selectWordsErrors,
} from 'data/slices/wordsSlice';
import Spinner from 'utils/Spinner';

const WordsListPage: FC = () => {
  const words = useSelector(selectWords);
  const wordsToRepeat = useSelector(selectWordsToRepeat);
  const wordsLoading = useSelector(selectWordsLoading);
  const wordsErrors = useSelector(selectWordsErrors);

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
        <InfoBar icon="error">
          Add some words to use application features.{' '}
          <span role="img" aria-label="emoji">
            😉
          </span>
        </InfoBar>
      )}
      {words.length !== 0 && wordsToRepeat.length === 0 && (
        <InfoBar icon="error">
          Uncheck the words you can&apos;t and you want to add to repeat. Click ✔ next to your word.
        </InfoBar>
      )}
      {wordsLoading ? (
        <Spinner />
      ) : (
        <Words
          searchValue={searchValue}
          setEditingWordOnModal={setEditingWordOnModal}
          words={words}
        />
      )}
      {wordsErrors && <InfoBar icon="error">Oops! Something went wrong. Try again later.</InfoBar>}
      <Portal>
        <Modal visibility={isModalVisible} toggleModal={toggleModal} editedWord={editedWord} />
      </Portal>
    </WordsListPageTemplate>
  );
};

export default WordsListPage;
