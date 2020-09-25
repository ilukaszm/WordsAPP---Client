import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'theme/theme';
import ButtonLink from './ButtonLink';

describe('ButtonLink component', () => {
  test('is rendered with text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <ButtonLink>example</ButtonLink>
      </ThemeProvider>,
    );
    const buttonLink = getByText(/example/i);

    expect(buttonLink).toBeInTheDocument();
  });
});
