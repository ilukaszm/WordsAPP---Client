import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import * as schema from 'utils/validationSchemas';
import { addWord, editWord } from 'data/slices/wordsSlice';
import { Input, Button } from 'components';
import {
  StyledWrapper,
  StyledForm,
  CloseButton,
  StyledShadow,
  StyledHeading,
} from './Modal.styled';

interface Inputs {
  word: string;
  translation: string;
}

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
  const dispatch = useDispatch();

  const { handleSubmit, register, errors, reset } = useForm<Inputs>({
    resolver: yupResolver(schema.word),
    defaultValues: {
      word: editedWord?.word,
      translation: editedWord?.translation,
    },
  });
  const onSubmit = (data: Inputs) => {
    if (!editedWord) {
      dispatch(addWord({ word: data.word, translation: data.translation }));
    } else {
      dispatch(editWord({ id: editedWord.id, word: data.word, translation: data.translation }));
    }

    reset();
    toggleModal();
  };

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
