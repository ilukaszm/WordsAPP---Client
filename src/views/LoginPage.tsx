import React, { FC, useState } from 'react';

import { LoginPageTemplate } from 'templates';
import { SocialButton } from 'components';
import { googleAuth, fbAuth } from 'services/firebase';
import usePreviousPage from 'hooks/usePreviousPage';
import { createProfileByIntegrate } from 'helpers/manageData';

const LoginPage: FC = () => {
  const [viewType, setViewType] = useState<'login' | 'register'>('login');
  const [integrateError, setIntegrateError] = useState('');
  const previousPage = usePreviousPage();

  const handleChange = () => {
    if (viewType === 'login') {
      setViewType('register');
    } else {
      setViewType('login');
    }
  };

  return (
    <LoginPageTemplate viewType={viewType} handlerFn={handleChange} integrateError={integrateError}>
      <SocialButton
        variant="google"
        onClick={async () => {
          try {
            const user = await googleAuth();
            if (user) {
              await createProfileByIntegrate(user, 'google');
            }
            previousPage();
          } catch (error) {
            setIntegrateError(error.message);
          }
        }}
      />
      <SocialButton
        variant="facebook"
        onClick={async () => {
          try {
            const user = await fbAuth();
            if (user) {
              await createProfileByIntegrate(user, 'facebook');
            }
            previousPage();
          } catch (error) {
            setIntegrateError(error.message);
          }
        }}
      />
    </LoginPageTemplate>
  );
};

export default LoginPage;
