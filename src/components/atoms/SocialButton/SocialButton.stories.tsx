import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import SocialButton from './SocialButton';

export default {
  title: 'atoms/SocialButton',
  component: SocialButton,
} as Meta;

export const Google: FC = () => <SocialButton variant="google" />;
export const Facebook: FC = () => <SocialButton variant="facebook" />;
