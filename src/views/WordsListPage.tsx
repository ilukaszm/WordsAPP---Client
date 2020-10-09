import React, { FC, useState, ChangeEvent, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { WordsListPageTemplate } from 'templates';
import { Words, Modal } from 'components';
import { selectWords } from 'data/slices/wordsSlice';
import { Portal } from 'utils/Portal';

const WordsListPage: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isModalVisible, setModalVisibility] = useState(false);
  const [editedValueId, setEditedValueId] = useState<string | null>(null);

  const words = useSelector(selectWords);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const toggleModal = () => {
    if (isModalVisible === false) {
      setModalVisibility(true);
    } else {
      setModalVisibility(false);
    }
  };

  const toggleEditingWord = (id: string) => {
    setEditedValueId(id);
    toggleModal();
  };

  const toggleAddWord = () => {
    if (editedValueId) {
      setEditedValueId(null);
    }
    toggleModal();
  };

  const editedWord = useMemo(() => {
    if (editedValueId) {
      return words.find((word) => word.id === editedValueId);
    }
    return null;
  }, [editedValueId, words]);

  return (
    <>
      <WordsListPageTemplate
        searchValue={searchValue}
        handleChangeFn={handleChange}
        toggleAddWord={toggleAddWord}
      >
        <Words searchValue={searchValue} toggleEditingWord={toggleEditingWord} />
      </WordsListPageTemplate>
      <Portal>
        <Modal visibility={isModalVisible} toggleModal={toggleModal} editedWord={editedWord} />
      </Portal>
    </>
  );
};

export default WordsListPage;
