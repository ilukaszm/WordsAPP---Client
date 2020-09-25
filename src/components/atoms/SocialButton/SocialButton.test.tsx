import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'theme/theme';
import SocialButton from './SocialButton';

const renderSocialButton = (variant?: string) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <SocialButton variant={variant} />
    </ThemeProvider>,
  );
  const socialButton = utils.getByTestId('social-button');

  return { ...utils, socialButton };
};

describe('SocialButton component', () => {
  test('is rendered with default button', () => {
    const { socialButton } = renderSocialButton();

    expect(socialButton).toBeInTheDocument();
  });

  test('is rendered with icons', () => {
    const { socialButton, rerender } = renderSocialButton('facebook');

    expect(socialButton).toBeInTheDocument();

    rerender(
      <ThemeProvider theme={theme}>
        <SocialButton variant="google" />
      </ThemeProvider>,
    );
    expect(socialButton).toBeInTheDocument();
  });

  test('is rendered with svg', () => {
    const { socialButton, rerender } = renderSocialButton('facebook');

    expect(socialButton.querySelector('svg')).toBeInTheDocument();

    rerender(
      <ThemeProvider theme={theme}>
        <SocialButton variant="google" />
      </ThemeProvider>,
    );
    expect(socialButton.querySelector('svg')).toBeInTheDocument();
  });
});
