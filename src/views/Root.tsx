import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from 'context/AuthContext';
import routes from 'routes';
import theme from 'theme/theme';
import GlobalStyles from 'theme/GlobalStyles';
import { PrivateRoute } from 'components';
import Spinner from 'utils/Spinner';

const LoginPage = lazy(() => import('views/LoginPage'));
const UserPage = lazy(() => import('views/UserPage'));
const ResetPasswordPage = lazy(() => import('views/ResetPasswordPage'));

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Router>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <PrivateRoute exact path={routes.home}>
                <Redirect to={routes.wordsList} />
              </PrivateRoute>
              <Route exact path={routes.login} component={LoginPage} />
              <Route path={routes.resetPassowrd} component={ResetPasswordPage} />
              <PrivateRoute path={routes.wordsList} component={UserPage} />
              <PrivateRoute path={routes.flashcards} component={UserPage} />
              <PrivateRoute path={routes.game} component={UserPage} />
              <PrivateRoute path={routes.gameStats} component={UserPage} />
              <PrivateRoute path={routes.profile} component={UserPage} />
            </Switch>
          </Suspense>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Root;
