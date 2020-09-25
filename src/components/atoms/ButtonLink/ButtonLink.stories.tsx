import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import ButtonLink from './ButtonLink';

export default {
  title: 'atoms/ButtonLink',
  component: ButtonLink,
} as Meta;

export const Primary: FC = () => <ButtonLink>Primary button</ButtonLink>;
