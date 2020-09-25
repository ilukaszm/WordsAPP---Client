import React, { FC, useState } from 'react';

import StyledInput from './Input.styled';

export interface InputProps {
  type: string;
  id?: string;
  name?: string;
  label: string;
  error?: string;
}

const Input: FC<InputProps> = ({ type, label, id, name, error }) => {
  const [inputType, setInputType] = useState(type);

  const handleButtonClick = () => {
    if (inputType === 'text') {
      return setInputType('password');
    }
    return setInputType('text');
  };

  return (
    <StyledInput error={error} type={type} data-testid="input">
      <input type={inputType} name={name} id={id} placeholder=" " />
      <label htmlFor={id}>{label}</label>
      {type === 'password' && (
        <input type="button" onClick={handleButtonClick} data-testid="button" />
      )}
      <p>{error}</p>
    </StyledInput>
  );
};

export default Input;
