import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Paragraph from './Paragraph';

export default {
  title: 'atoms/Paragraph',
  component: Paragraph,
} as Meta;

export const Primary: FC = () => <Paragraph>This is example text.</Paragraph>;
