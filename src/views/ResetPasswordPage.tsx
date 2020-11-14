import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { auth } from 'services/firebase';

import {} from 'helpers/manageData';
import { ResetPasswordPageTemplate } from 'templates';
import {
  StyledButton,
  StyledInput,
  StyledForm,
} from 'templates/ResetPasswordPageTemplate/ResetPasswordPageTemplate.styled';
import { InfoBar, InfoBarWrapper } from 'components';
import * as schema from 'utils/validationSchemas';

interface Email {
  email: string;
}

const ResetPasswordPage: FC = () => {
  const [serverError, setServerError] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const { register, handleSubmit, errors, reset } = useForm<Email>({
    resolver: yupResolver(schema.email),
  });

  const onSubmit = async ({ email }: Email) => {
    try {
      await auth().sendPasswordResetEmail(email);
      setIsEmailSent(true);
      setServerError('');
      reset({ email: '' });
    } catch (error) {
      setServerError(error.message);
    }
  };

  return (
    <div>
      <ResetPasswordPageTemplate>
        <InfoBarWrapper>
          {serverError && <InfoBar icon="error">{serverError}</InfoBar>}
          {isEmailSent && (
            <InfoBar icon="success">Email has been sent. Check your mailbox.</InfoBar>
          )}
        </InfoBarWrapper>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type="email"
            id="email"
            name="email"
            label="Your email adress"
            register={register}
            errors={errors.email}
          />
          <StyledButton type="submit">Send email</StyledButton>
        </StyledForm>
      </ResetPasswordPageTemplate>
    </div>
  );
};

export default ResetPasswordPage;
