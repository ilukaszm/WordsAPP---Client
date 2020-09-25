import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Input from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
} as Meta;

export const Text: FC = () => <Input type="text" label="example" name="example" id="example" />;

export const Password: FC = () => (
  <Input type="password" label="password" name="password" id="password" />
);

export const Error: FC = () => (
  <Input
    type="password"
    label="password"
    name="example-error"
    id="example-error"
    error="Wrong password!"
  />
);
