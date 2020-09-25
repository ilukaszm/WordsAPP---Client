import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';

import theme from 'theme/theme';
import Input from './Input';

const renderInput = (
  type: string = 'text',
  label: string = 'Example',
  name: string = 'example',
  id: string = 'example',
  error?: string,
) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <Input type={type} label={label} name={name} id={id} error={error} />
    </ThemeProvider>,
  );
  const input = utils.getByLabelText(/example/i);

  return { ...utils, input };
};

describe('Input component', () => {
  test('type text with label is rendered', () => {
    const { input } = renderInput();

    expect(input).toBeInTheDocument();
  });

  test('has controlled value', () => {
    const { input } = renderInput();

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  test('is rendered with error', () => {
    const { container } = renderInput(
      'text',
      'Example label',
      'example name',
      'example id',
      'Error: example error.',
    );

    expect(container).toHaveTextContent(/error/i);
  });

  test('has controll button which show or hide password', () => {
    const { input, getByTestId } = renderInput('password');
    const button = getByTestId('button');

    userEvent.click(button);
    expect(input).toHaveAttribute('type', 'text');
  });
});
