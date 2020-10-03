import React, { FC } from 'react';

import { CheckIcon, RepeatIcon, EditIcon, RemoveIcon } from 'assets';
import StyledItemButton from './ItemButton.styled';

interface ItemButtonProps {
  className?: string;
  variant?: 'check' | 'repeat' | 'edit' | 'remove';
  onClick?: (arg?: any) => any;
}

const ItemButton: FC<ItemButtonProps> = ({ className, variant, onClick }) => {
  return (
    <StyledItemButton className={className} data-testid="item-button">
      {variant === 'check' && <CheckIcon onClick={onClick} />}
      {variant === 'repeat' && <RepeatIcon onClick={onClick} />}
      {variant === 'edit' && <EditIcon onClick={onClick} />}
      {variant === 'remove' && <RemoveIcon onClick={onClick} />}
    </StyledItemButton>
  );
};

ItemButton.defaultProps = {
  variant: 'check',
};

export default ItemButton;
