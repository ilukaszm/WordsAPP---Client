import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'theme/theme';
import NavBar from './NavBar';

describe('NavBar component', () => {
  test('is rendered', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>,
    );
    const navbar = getByTestId('navbar');

    expect(navbar).toBeInTheDocument();
  });
});
