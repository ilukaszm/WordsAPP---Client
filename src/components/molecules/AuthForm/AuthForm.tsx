import React, { FC } from 'react';

import { Input, Button } from 'components';
import useAuthForm from 'hooks/useAuthForm';
import { StyledForm, StyledError } from './AuthForm.styled';

interface AuthFormProps {
  className?: string;
  viewType: 'register' | 'login';
}

const AuthForm: FC<AuthFormProps> = ({ className, viewType }) => {
  const { handleSubmit, onSubmit, register, errors, serverError } = useAuthForm(viewType);

  return (
    <>
      <StyledError>{serverError}</StyledError>
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
    </>
  );
};

export default AuthForm;
