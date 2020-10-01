import React, { FC, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import { WordsListPageTemplate } from 'templates';
import { WordItem } from 'components';
import { selectWords } from 'data/slices/wordsSlice';

const WordsListPage: FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isModalVisible, setModalVisibility] = useState(false);

  const words = useSelector(selectWords);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleModal = () => {
    if (isModalVisible === false) {
      setModalVisibility(true);
    } else {
      setModalVisibility(false);
    }
  };

  return (
    <WordsListPageTemplate
      searchValue={searchValue}
      handleChangeFn={handleChange}
      modalVisibility={isModalVisible}
      handleModal={handleModal}
    >
      {words
        .filter(
          ({ word, translation }) =>
            word.includes(searchValue) || translation.includes(searchValue),
        )
        .map(({ id, word, translation }) => {
          return <WordItem key={id} word={word} translation={translation} />;
        })}
    </WordsListPageTemplate>
  );
};

export default WordsListPage;
