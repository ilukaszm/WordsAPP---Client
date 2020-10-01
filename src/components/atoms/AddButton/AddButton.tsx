import React, { FC } from 'react';

import { PlusIcon } from 'assets';
import StyledAddButton from './AddButton.styled';

interface AddButtonProps {
  className?: string;
  onClick?: () => void;
}

const AddButton: FC<AddButtonProps> = ({ className, onClick }) => {
  return (
    <StyledAddButton className={className} onClick={onClick} data-testid="add-button">
      <PlusIcon />
    </StyledAddButton>
  );
};

export default AddButton;
