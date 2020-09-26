import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Heading from './Heading';

export default {
  title: 'atoms/Heading',
  component: Heading,
} as Meta;

export const Primary: FC = () => <Heading>This is example text.</Heading>;
