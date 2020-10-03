import React, { FC, useState, ChangeEvent } from 'react';
import { ValidationRules, UseFormMethods } from 'react-hook-form';

import StyledInput from './Input.styled';

export interface InputProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
  className?: string;
  rules?: ValidationRules;
  type: string;
  id?: string;
  name?: string;
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  className,
  type,
  label,
  id,
  name,
  errors,
  rules = {},
  register,
  value,
  defaultValue,
  onChange,
}) => {
  const [inputType, setInputType] = useState(type);

  const handleButtonClick = () => {
    if (inputType === 'text') {
      return setInputType('password');
    }
    return setInputType('text');
  };

  return (
    <StyledInput
      className={className}
      error={!!errors}
      type={type}
      data-testid="input"
      key={defaultValue}
    >
      <input
        type={inputType}
        name={name}
        id={id}
        placeholder=" "
        ref={register && register(rules)}
        value={value}
        defaultValue={defaultValue || ''}
        onChange={onChange}
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
