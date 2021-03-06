import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Paragraph, ItemButton } from 'components';
import { removeItem, changeItemStatus } from 'helpers/manageData';
import { WordWrapper } from './Word.styled';

interface WordProps {
  word: string;
  translation: string;
  id: string;
  toRepeat: boolean;
  toggleEditingWord: (id: string) => void;
}

const Word: FC<WordProps> = ({ id, word, translation, toRepeat, toggleEditingWord }) => {
  const dispatch = useDispatch();

  const handlechangeWordStatus = () => {
    dispatch(changeItemStatus(id, !toRepeat));
  };

  const handleRemoveWord = () => {
    dispatch(removeItem(id));
  };

  return (
    <WordWrapper>
      <Paragraph>{word}</Paragraph>
      <Paragraph>{translation}</Paragraph>
      <div>
        {toRepeat ? (
          <ItemButton variant="repeat" onClick={handlechangeWordStatus} />
        ) : (
          <ItemButton variant="check" onClick={handlechangeWordStatus} />
        )}
        <ItemButton variant="edit" onClick={() => toggleEditingWord(id)} />
        <ItemButton variant="remove" onClick={() => handleRemoveWord()} />
      </div>
    </WordWrapper>
  );
};

export default Word;
