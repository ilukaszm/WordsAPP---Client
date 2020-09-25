import React, { FC } from 'react';
import { Meta } from '@storybook/react/types-6-0';

import ItemButton from './ItemButton';

export default {
  title: 'atoms/ItemButton',
  component: ItemButton,
} as Meta;

export const CheckButton: FC = () => <ItemButton variant="check" />;
export const RepeatButton: FC = () => <ItemButton variant="repeat" />;
export const EditButton: FC = () => <ItemButton variant="edit" />;
export const RemoveButton: FC = () => <ItemButton variant="remove" />;

export const AllButtons: FC = () => (
  <div>
    <ItemButton variant="check" />
    <ItemButton variant="repeat" />
    <ItemButton variant="edit" />
    <ItemButton variant="remove" />
  </div>
);
