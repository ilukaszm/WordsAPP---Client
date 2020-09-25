import React, { FC } from 'react';

import { CheckIcon, RepeatIcon, EditIcon, RemoveIcon } from 'assets';
import StyledItemButton from './ItemButton.styled';

interface ItemButtonProps {
  className?: string;
  variant?: 'check' | 'repeat' | 'edit' | 'remove';
}

const ItemButton: FC<ItemButtonProps> = ({ className, variant }) => {
  return (
    <StyledItemButton className={className} data-testid="item-button">
      {variant === 'check' && <CheckIcon />}
      {variant === 'repeat' && <RepeatIcon />}
      {variant === 'edit' && <EditIcon />}
      {variant === 'remove' && <RemoveIcon />}
    </StyledItemButton>
  );
};

ItemButton.defaultProps = {
  variant: 'check',
};

export default ItemButton;
