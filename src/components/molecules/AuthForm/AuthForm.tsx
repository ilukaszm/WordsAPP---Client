import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { Input, Button } from 'components';
import * as schema from 'utils/validationSchemas';
import { authUser } from 'data/slices/authSlice';
import { StyledForm } from './AuthForm.styled';

interface AuthFormProps {
  className?: string;
  viewType: 'register' | 'login';
}

interface Inputs {
  email: string;
  password: string;
  confirmPassword: string;
}

const AuthForm: FC<AuthFormProps> = ({ className, viewType }) => {
  const dispatch = useDispatch();

  const { handleSubmit, register, errors } = useForm<Inputs>({
    resolver: yupResolver(viewType === 'login' ? schema.login : schema.register),
  });
  const onSubmit = (data: Inputs) => {
    dispatch(authUser({ email: data.email, password: data.password }));
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} className={className}>
      <Input
        type="email"
        id="email"
        name="email"
        label="Email"
        register={register}
        errors={errors.email}
      />
      <Input
        type="password"
        id="password"
        name="password"
        label="Password"
        register={register}
        errors={errors.password}
      />
      {viewType === 'register' && (
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          register={register}
          errors={errors.confirmPassword}
        />
      )}
      <Button type="submit">{viewType === 'register' ? 'Sign Up' : 'Sign In'}</Button>
    </StyledForm>
  );
};

export default AuthForm;
