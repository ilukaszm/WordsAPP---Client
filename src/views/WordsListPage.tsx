import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import { selectUserProfile } from 'data/slices/userProfileSlice';
import Spinner from 'utils/Spinner';
import { useAuthContext } from 'context/AuthContext';
import { getUserProfile } from 'helpers/manageData';

const WordsListPage: FC = () => {
  const dispatch = useDispatch();
  const { userId } = useAuthContext();

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, [userId, dispatch]);

  const words = useSelector(selectWords);
  const wordsToRepeat = useSelector(selectWordsToRepeat);
  const wordsLoading = useSelector(selectWordsLoading);
  const wordsErrors = useSelector(selectWordsErrors);
  const { numberOfLevels } = useSelector(selectUserProfile) || 0;

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
      {words.length < numberOfLevels + 1 && (
        <InfoBar icon="error">
          Add words to use application features.{' '}
          <span role="img" aria-label="emoji">
            😉
          </span>{' '}
          {words.length}/{numberOfLevels + 1}
        </InfoBar>
      )}
      {words.length !== 0 && wordsToRepeat.length === 0 && (
        <InfoBar icon="error">
          Uncheck the words which you don&apos;t know and you want to add to repeat. Click ✔ next to
          your word.
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
