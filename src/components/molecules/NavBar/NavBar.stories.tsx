import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import NavBar from './NavBar';

export default {
  title: 'atoms/NavBar',
  component: NavBar,
} as Meta;

export const Primary: FC = () => <NavBar />;
