import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Word } from 'components';
import { selectWords } from 'data/slices/wordsSlice';
import { getItems } from 'helpers/manageData';
import { useAuthContext } from 'contexts/AuthContext';

interface WordsProps {
  searchValue: string;
  toggleEditingWord: (id: string) => void;
}

const Words: FC<WordsProps> = ({ searchValue, toggleEditingWord }) => {
  const dispatch = useDispatch();
  const { userId }: any = useAuthContext();

  useEffect(() => {
    dispatch(getItems(userId));
  }, [dispatch, userId]);

  const words = useSelector(selectWords);

  return (
    <>
      {words
        .filter(
          ({ word, translation }) =>
            word.toLowerCase().includes(searchValue.toLowerCase()) ||
            translation.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .map(({ id, word, translation, toRepeat }) => {
          return (
            <Word
              key={id}
              id={id}
              word={word}
              translation={translation}
              toRepeat={toRepeat}
              toggleEditingWord={toggleEditingWord}
            />
          );
        })}
    </>
  );
};

export default Words;
