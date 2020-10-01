import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import * as schema from 'utils/validationSchemas';
import { addWord } from 'data/slices/wordsSlice';
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

interface ModalProps {
  visibility: boolean;
  handleModalFn: () => void;
}

const Modal: FC<ModalProps> = ({ visibility, handleModalFn }) => {
  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm<Inputs>({
    resolver: yupResolver(schema.word),
  });
  const onSubmit = (data: Inputs) => {
    dispatch(addWord({ word: data.word, translation: data.translation }));
    handleModalFn();
  };

  return (
    <>
      <StyledShadow visibility={visibility} />
      <StyledWrapper visibility={visibility}>
        <CloseButton onClick={handleModalFn} />
        <StyledHeading>Add new word</StyledHeading>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            name="word"
            id="word"
            label="word"
            register={register}
            errors={errors.word}
          />
          <Input
            type="text"
            name="translation"
            id="translation"
            label="translation"
            register={register}
            errors={errors.translation}
          />
          <Button type="submit">add</Button>
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

export default Modal;
