import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
import GlobalStyles from 'theme/GlobalStyles';
import { LoginPage } from 'views';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={() => <h1>wordsAPP</h1>} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
