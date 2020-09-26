import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Logo from './Logo';

export default {
  title: 'atoms/Logo',
  component: Logo,
} as Meta;

export const LogoSmall: FC = () => <Logo variant="small" />;
export const LogoBig: FC = () => <Logo variant="big" />;
