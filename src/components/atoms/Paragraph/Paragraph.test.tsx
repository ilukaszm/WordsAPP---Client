import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'theme/theme';
import Paragraph from './Paragraph';

describe('Paragraph component', () => {
  test('is rendered with text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Paragraph>example</Paragraph>
      </ThemeProvider>,
    );
    const paragraph = getByText(/example/i);

    expect(paragraph).toBeInTheDocument();
  });
});
