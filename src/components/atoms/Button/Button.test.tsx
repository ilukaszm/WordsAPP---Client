import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'theme/theme';
import Button from './Button';

describe('Button component', () => {
  test('is rendered', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button>Example</Button>
      </ThemeProvider>,
    );
    const button = getByText(/example/i);

    expect(button).toBeInTheDocument();
  });

  test('is rendered as small type', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button small>Example</Button>
      </ThemeProvider>,
    );
    const button = getByText(/example/i);

    expect(button).toBeInTheDocument();
  });
});
