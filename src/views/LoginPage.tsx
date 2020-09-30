import React, { FC, useState } from 'react';

import { LoginPageTemplate } from 'templates';

const LoginPage: FC = () => {
  const [viewType, setViewType] = useState<'login' | 'register'>('login');

  const handleChange = () => {
    if (viewType === 'login') {
      setViewType('register');
    } else {
      setViewType('login');
    }
  };

  return <LoginPageTemplate viewType={viewType} handlerFn={handleChange} />;
};

export default LoginPage;
