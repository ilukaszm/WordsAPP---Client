import React, { FC } from 'react';

import { Paragraph, ItemButton } from 'components';
import { WordWrapper } from './WordItem.styled';

interface WordItemProps {
  word: string;
  translation: string;
}

const WordItem: FC<WordItemProps> = ({ word, translation }) => {
  return (
    <WordWrapper>
      <Paragraph>{word}</Paragraph>
      <Paragraph>{translation}</Paragraph>
      <div>
        <ItemButton variant="check" />
        <ItemButton variant="repeat" />
        <ItemButton variant="edit" />
        <ItemButton variant="remove" />
      </div>
    </WordWrapper>
  );
};

export default WordItem;
