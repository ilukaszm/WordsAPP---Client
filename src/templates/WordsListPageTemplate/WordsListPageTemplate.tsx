import React, { FC, ChangeEvent } from 'react';

import {
  StyledInput,
  ColumnsTitle,
  StyledParagraph,
  StyledAddButton,
} from './WordsListPlageTemplate.styled';

interface WordsListPageTemplateProps {
  searchValue: string;
  setAddingWordOnModal: () => void;
  handleChangeFn: (e: ChangeEvent<HTMLInputElement>) => void;
}

const WordsListPageTemplate: FC<WordsListPageTemplateProps> = ({
  searchValue,
  handleChangeFn,
  setAddingWordOnModal,
  children,
}) => {
  return (
    <div>
      <StyledInput
        type="text"
        label="Search word"
        id="search"
        name="search"
        value={searchValue}
        onChange={handleChangeFn}
      />
      <ColumnsTitle>
        <StyledParagraph>word:</StyledParagraph>
        <StyledParagraph>translation:</StyledParagraph>
      </ColumnsTitle>
      {children}
      <StyledAddButton onClick={setAddingWordOnModal} />
    </div>
  );
};

export default WordsListPageTemplate;
