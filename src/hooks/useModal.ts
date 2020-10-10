import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import * as schema from 'utils/validationSchemas';
import { addItem, editItem } from 'helpers/manageData';
import { useAuthContext } from 'contexts/AuthContext';

interface Inputs {
  word: any;
  translation: any;
}

interface EditedWord {
  id: string;
  word: string;
  translation: string;
  toRepeat: boolean;
}

export default (toggleFn: () => void, editedWord?: EditedWord | null) => {
  const dispatch = useDispatch();
  const { userId }: any = useAuthContext();

  const { handleSubmit, register, errors, reset } = useForm<Inputs>({
    resolver: yupResolver(schema.word),
    defaultValues: {
      word: editedWord?.word,
      translation: editedWord?.translation,
    },
  });
  const onSubmit = (data: Inputs) => {
    const { word, translation } = data;

    if (!editedWord) {
      dispatch(addItem({ word, translation, userId }));
    } else {
      dispatch(editItem(editedWord?.id, { word, translation }));
    }

    reset();
    toggleFn();
  };

  return { handleSubmit, onSubmit, register, errors };
};
