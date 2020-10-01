import React, { FC, ChangeEvent } from 'react';

import { Modal } from 'components';
import {
  StyledInput,
  ColumnsTitle,
  StyledParagraph,
  StyledAddButton,
} from './WordsListPlageTemplate.styled';

interface WordsListPageTemplateProps {
  searchValue: string;
  modalVisibility: boolean;
  handleChangeFn: (e: ChangeEvent<HTMLInputElement>) => void;
  handleModal: () => void;
}

const WordsListPageTemplate: FC<WordsListPageTemplateProps> = ({
  searchValue,
  modalVisibility,
  handleChangeFn,
  handleModal,
  children,
}) => {
  return (
    <div>
      <StyledInput type="text" label="Search words" value={searchValue} onChange={handleChangeFn} />
      <ColumnsTitle>
        <StyledParagraph>word:</StyledParagraph>
        <StyledParagraph>translation:</StyledParagraph>
      </ColumnsTitle>
      <StyledAddButton onClick={handleModal} />
      <div>{children}</div>
      <Modal visibility={modalVisibility} handleModalFn={handleModal} />
    </div>
  );
};

export default WordsListPageTemplate;
