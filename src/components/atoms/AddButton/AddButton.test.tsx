import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'theme/theme';
import AddButton from './AddButton';

describe('AddButton component', () => {
  test('is rendered with svg', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <AddButton />
      </ThemeProvider>,
    );
    const addButton = getByTestId('add-button');

    expect(addButton.querySelector('svg')).toBeInTheDocument();
  });
});
