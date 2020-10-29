import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta;

export const Primary: React.FC<{}> = () => (
  <Checkbox label="checkbox" name="example" id="example" />
);
