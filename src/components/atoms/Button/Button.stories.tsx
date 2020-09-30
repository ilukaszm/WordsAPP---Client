import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Button from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
} as Meta;

export const Primary: FC = () => <Button>Primary button</Button>;
