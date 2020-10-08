import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import * as schema from 'utils/validationSchemas';
import usePreviousPage from 'hooks/usePreviousPage';
import { auth } from 'services/firebase';

interface Inputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export default (viewType: 'register' | 'login') => {
  const [serverError, setServerError] = useState('');
  const previousPage = usePreviousPage();

  const { handleSubmit, register, errors } = useForm<Inputs>({
    resolver: yupResolver(viewType === 'login' ? schema.login : schema.register),
  });
  const onSubmit = async (data: Inputs) => {
    const { email, password } = data;

    try {
      if (viewType === 'login') {
        await auth().signInWithEmailAndPassword(email, password);
        previousPage();
      } else {
        await auth().createUserWithEmailAndPassword(email, password);
        previousPage();
      }
    } catch (error) {
      setServerError(error.message);
    }
  };

  return { handleSubmit, onSubmit, register, errors, serverError };
};
