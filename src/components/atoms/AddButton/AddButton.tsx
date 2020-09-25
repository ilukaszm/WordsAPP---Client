import React, { FC } from 'react';

import { PlusIcon } from 'assets';
import StyledAddButton from './AddButton.styled';

interface AddButtonProps {
  className?: string;
}

const AddButton: FC<AddButtonProps> = ({ className }) => {
  return (
    <StyledAddButton className={className} data-testid="add-button">
      <PlusIcon />
    </StyledAddButton>
  );
};

export default AddButton;
