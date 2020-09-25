import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import theme from 'theme/theme';
import SocialButton from './SocialButton';

type Variants = 'facebook' | 'google';

const renderSocialButton = (variant?: Variants) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <SocialButton variant={variant} />
    </ThemeProvider>,
  );
  const socialButton = utils.getByTestId('social-button');

  return { ...utils, socialButton };
};

describe('SocialButton component', () => {
  test('is rendered with default icon', () => {
    const { socialButton } = renderSocialButton();

    expect(socialButton.querySelector('svg')).toBeInTheDocument();
  });

  test('is rendered with facebook.svg', () => {
    const { socialButton } = renderSocialButton('facebook');

    expect(socialButton.querySelector('svg')).toBeInTheDocument();
  });

  test('is rendered with google.svg', () => {
    const { socialButton } = renderSocialButton('google');

    expect(socialButton.querySelector('svg')).toBeInTheDocument();
  });
});
