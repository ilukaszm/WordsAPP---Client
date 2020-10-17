import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  test('is rendered with label', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Checkbox label="example" name="example" id="example" />
      </ThemeProvider>,
    );
    const checkbox = getByLabelText(/example/i);

    expect(checkbox).toBeInTheDocument();
  });

  test('reacted properly on change', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <Checkbox label="example" name="example" id="example" />
      </ThemeProvider>,
    );
    const checkbox = getByLabelText(/example/i);

    fireEvent.change(checkbox, { target: { checked: true } });
    expect(checkbox).toBeChecked();

    fireEvent.change(checkbox, { target: { checked: false } });
    expect(checkbox).not.toBeChecked();
  });
});
