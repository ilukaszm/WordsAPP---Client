import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
import GlobalStyles from 'theme/GlobalStyles';
import { LoginPage, UserPage } from 'views';
import routes from 'routes';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path={routes.home}>
            <Redirect to={routes.wordsList} />
          </Route>
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
