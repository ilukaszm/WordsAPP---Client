import React from 'react';
import { render } from '@testing-library/react';

import Logo from './Logo';

const renderLogo = (variant?: 'small' | 'big') => {
  const utils = render(<Logo variant={variant} />);

  return { ...utils };
};

describe('Logo component', () => {
  test('is rendered as a default component with small logo', () => {
    const { getByTestId } = renderLogo();
    const logoSmall = getByTestId('logo-small');

    expect(logoSmall).toBeInTheDocument();
  });

  test('is rendered as a small logo', () => {
    const { getByTestId } = renderLogo('small');
    const logoSmall = getByTestId('logo-small');

    expect(logoSmall).toBeInTheDocument();
  });

  test('is rendered as a big logo', () => {
    const { getByTestId } = renderLogo('big');
    const logoBig = getByTestId('logo-big');

    expect(logoBig).toBeInTheDocument();
  });
});
