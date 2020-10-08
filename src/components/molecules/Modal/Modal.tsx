import React, { FC } from 'react';

import { Input, Button } from 'components';
import useModal from 'hooks/useModal';
import {
  StyledWrapper,
  StyledForm,
  CloseButton,
  StyledShadow,
  StyledHeading,
} from './Modal.styled';

interface EditedWord {
  id: string;
  word: string;
  translation: string;
  toRepeat: boolean;
}

interface ModalProps {
  visibility: boolean;
  toggleModal: () => void;
  editedWord?: EditedWord | null;
  closeEditingWord?: () => void;
}

const Modal: FC<ModalProps> = ({ visibility, toggleModal, editedWord }) => {
  const { handleSubmit, onSubmit, register, errors } = useModal(toggleModal, editedWord);

  return (
    <>
      <StyledShadow visibility={visibility} />
      <StyledWrapper visibility={visibility}>
        <CloseButton onClick={toggleModal} />
        <StyledHeading>{editedWord ? 'Edit word' : 'Add new word'}</StyledHeading>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="word"
            id="word"
            label="word"
            register={register}
            errors={errors.word}
            defaultValue={editedWord?.word}
          />
          <Input
            type="text"
            name="translation"
            id="translation"
            label="translation"
            register={register}
            errors={errors.translation}
            defaultValue={editedWord?.translation}
          />
          <Button type="submit">{editedWord ? 'edit' : 'add'}</Button>
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

export default Modal;
