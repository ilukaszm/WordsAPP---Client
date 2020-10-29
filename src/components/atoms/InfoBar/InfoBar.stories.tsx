import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import InfoBar from './InfoBar';

export default {
  title: 'atoms/InfoBar',
  component: InfoBar,
} as Meta;

export const Loading: FC = () => <InfoBar icon="loader">Example text</InfoBar>;
export const Error: FC = () => <InfoBar icon="error">Example text</InfoBar>;
export const Success: FC = () => <InfoBar icon="success">Example text</InfoBar>;
