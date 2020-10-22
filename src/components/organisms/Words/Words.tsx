import React, { FC } from 'react';

import { Word } from 'components';

interface WordsProps {
  searchValue: string;
  setEditingWordOnModal: (id: string) => void;
  words: any[];
}

const Words: FC<WordsProps> = ({ searchValue, setEditingWordOnModal, words }) => {
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
              toggleEditingWord={setEditingWordOnModal}
            />
          );
        })}
    </>
  );
};

export default Words;
