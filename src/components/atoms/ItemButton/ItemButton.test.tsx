import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'theme/theme';
import ItemButton from './ItemButton';

type Variants = 'check' | 'repeat' | 'edit' | 'remove';

const renderItemButton = (variant?: Variants) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <ItemButton variant={variant} />
    </ThemeProvider>,
  );
  const itemButton = utils.getByTestId('item-button');

  return { ...utils, itemButton };
};

describe('ItemButton component', () => {
  test('is rendered with default icon', () => {
    const { itemButton } = renderItemButton();

    expect(itemButton.querySelector('svg')).toBeInTheDocument();
  });

  test('is rendered with check.svg', () => {
    const { itemButton } = renderItemButton('check');

    expect(itemButton.querySelector('svg')).toBeInTheDocument();
  });

  test('is rendered with repeat.svg', () => {
    const { itemButton } = renderItemButton('repeat');

    expect(itemButton.querySelector('svg')).toBeInTheDocument();
  });

  test('is rendered with edit.svg', () => {
    const { itemButton } = renderItemButton('edit');

    expect(itemButton.querySelector('svg')).toBeInTheDocument();
  });

  test('is rendered with remove.svg', () => {
    const { itemButton } = renderItemButton('remove');

    expect(itemButton.querySelector('svg')).toBeInTheDocument();
  });
});
