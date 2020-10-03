import React, { FC, ChangeEvent } from 'react';

import {
  StyledInput,
  ColumnsTitle,
  StyledParagraph,
  StyledAddButton,
} from './WordsListPlageTemplate.styled';

interface WordsListPageTemplateProps {
  searchValue: string;
  toggleAddWord: () => void;
  handleChangeFn: (e: ChangeEvent<HTMLInputElement>) => void;
}

const WordsListPageTemplate: FC<WordsListPageTemplateProps> = ({
  searchValue,
  handleChangeFn,
  toggleAddWord,
  children,
}) => {
  return (
    <div>
      <StyledInput type="text" label="Search words" value={searchValue} onChange={handleChangeFn} />
      <ColumnsTitle>
        <StyledParagraph>word:</StyledParagraph>
        <StyledParagraph>translation:</StyledParagraph>
      </ColumnsTitle>
      {children}
      <StyledAddButton onClick={toggleAddWord} />
    </div>
  );
};

export default WordsListPageTemplate;
