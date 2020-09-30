import React, { FC, useState } from 'react';
import { ValidationRules, UseFormMethods } from 'react-hook-form';

import StyledInput from './Input.styled';

export interface InputProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
  rules?: ValidationRules;
  type: string;
  id?: string;
  name?: string;
  label: string;
}

const Input: FC<InputProps> = ({ type, label, id, name, errors, rules = {}, register }) => {
  const [inputType, setInputType] = useState(type);

  const handleButtonClick = () => {
    if (inputType === 'text') {
      return setInputType('password');
    }
    return setInputType('text');
  };

  return (
    <StyledInput error={!!errors} type={type} data-testid="input">
      <input
        type={inputType}
        name={name}
        id={id}
        placeholder=" "
        ref={register && register(rules)}
      />
      <label htmlFor={id}>{label}</label>
      {type === 'password' && (
        <input type="button" onClick={handleButtonClick} data-testid="button" />
      )}
      <p>{errors?.message}</p>
    </StyledInput>
  );
};

export default Input;
