import React from 'react';
import { CheckboxProps } from './Checkbox.model';
import StyledCheckbox from './Checkbox.styled';

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  onChange,
  checked,
  label,
  id,
  name,
  register,
  rules = {},
  errors,
}) => {
  return (
    <StyledCheckbox className={className} errors={!!errors}>
      <input
        type="checkbox"
        id={id}
        name={name}
        ref={register && register(rules)}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </StyledCheckbox>
  );
};

export default Checkbox;
