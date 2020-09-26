import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import avatarPerson from 'assets/icons/avatarPerson.svg';
import theme from 'theme/theme';
import Avatar from './Avatar';

const renderAvatar = (avatarURL?: string) => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <Avatar avatarURL={avatarURL} />
    </ThemeProvider>,
  );
  const avatar = utils.getByTestId('avatar');

  return { ...utils, avatar };
};

describe('Avatar component', () => {
  test('is rendered as a default component', () => {
    const { avatar } = renderAvatar();

    expect(avatar).toBeInTheDocument();
  });

  test('is rendered with avatarURL', () => {
    const { avatar } = renderAvatar(avatarPerson);

    expect(avatar).toBeInTheDocument();
  });

  test('is rendered with avatarNone.svg', () => {
    const { avatar } = renderAvatar();

    expect(avatar.querySelector('svg')).toBeInTheDocument();
  });

  test('is rendered with image from avatarURL', () => {
    const { avatar } = renderAvatar();

    expect(avatar.querySelector('svg')).toBeInTheDocument();
  });
});
