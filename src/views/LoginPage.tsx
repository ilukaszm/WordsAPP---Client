import React, { FC, useState } from 'react';

import { LoginPageTemplate } from 'templates';
import { SocialButton } from 'components';
import { googleAuth, fbAuth } from 'services/firebase';
import usePreviousPage from 'hooks/usePreviousPage';

const LoginPage: FC = () => {
  const [viewType, setViewType] = useState<'login' | 'register'>('login');
  const previousPage = usePreviousPage();

  const handleChange = () => {
    if (viewType === 'login') {
      setViewType('register');
    } else {
      setViewType('login');
    }
  };

  return (
    <LoginPageTemplate viewType={viewType} handlerFn={handleChange}>
      <SocialButton
        variant="google"
        onClick={async () => {
          await googleAuth();
          previousPage();
        }}
      />
      <SocialButton
        variant="facebook"
        onClick={async () => {
          await fbAuth();
          previousPage();
        }}
      />
    </LoginPageTemplate>
  );
};

export default LoginPage;
