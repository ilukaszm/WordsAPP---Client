import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
import GlobalStyles from 'theme/GlobalStyles';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story {...context} />
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
