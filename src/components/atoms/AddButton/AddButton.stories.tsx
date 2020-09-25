import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import AddButton from './AddButton';

export default {
  title: 'atoms/AddButton',
  component: AddButton,
} as Meta;

export const Primary: FC = () => <AddButton />;
