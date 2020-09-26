import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'theme/theme';
import Heading from './Heading';

describe('Heading component', () => {
  test('is rendered with text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading>example</Heading>
      </ThemeProvider>,
    );
    const heading = getByText(/example/i);

    expect(heading).toBeInTheDocument();
  });
});
