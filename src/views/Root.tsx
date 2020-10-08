import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
import GlobalStyles from 'theme/GlobalStyles';
import { LoginPage, UserPage } from 'views';
import routes from 'routes';
import { PrivateRoute } from 'components';
import { AuthProvider } from 'contexts/AuthContext';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <Router>
          <Switch>
            <PrivateRoute exact path={routes.home}>
              <Redirect to={routes.wordsList} />
            </PrivateRoute>
            <Route path={routes.login} component={LoginPage} />
            <PrivateRoute path={routes.wordsList} component={UserPage} />
            <PrivateRoute path={routes.addWord} component={UserPage} />
            <PrivateRoute path={routes.game} component={UserPage} />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Root;
