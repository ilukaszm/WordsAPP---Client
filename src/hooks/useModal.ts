import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import * as schema from 'utils/validationSchemas';
import { addWord, editWord } from 'data/slices/wordsSlice';

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

export default (toggleFn: () => void, editedWord?: EditedWord | null) => {
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
    toggleFn();
  };

  return { handleSubmit, onSubmit, register, errors };
};
