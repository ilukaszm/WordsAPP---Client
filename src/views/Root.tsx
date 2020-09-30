import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
import GlobalStyles from 'theme/GlobalStyles';
import { LoginPage, HomePage } from 'views';
import routes from 'routes';
import UserPage from './UserPage';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.login} component={LoginPage} />
          <Route path={routes.wordsList} component={UserPage} />
          <Route path={routes.addWord} component={UserPage} />
          <Route path={routes.game} component={UserPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
