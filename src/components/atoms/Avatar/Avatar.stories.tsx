import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import avatarPerson from 'assets/icons/avatarPerson.svg';
import Avatar from './Avatar';

export default {
  title: 'Components/Atoms/Avatar',
  component: Avatar,
} as Meta;

export const Primary: React.FC<{}> = () => <Avatar />;
export const PrimaryWithAvatar: React.FC<{}> = () => <Avatar avatarURL={avatarPerson} />;
