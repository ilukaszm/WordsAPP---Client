import { useState, ChangeEvent, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectWords } from 'data/slices/wordsSlice';

export default () => {
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

  const setEditingWordOnModal = (id: string) => {
    setEditedValueId(id);
    toggleModal();
  };

  const setAddingWordOnModal = () => {
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

  return {
    searchValue,
    editedWord,
    isModalVisible,
    setAddingWordOnModal,
    toggleModal,
    setEditingWordOnModal,
    handleChange,
  };
};
