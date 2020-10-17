import { ValidationRules, UseFormMethods } from 'react-hook-form';

export interface CheckboxProps extends Partial<Pick<UseFormMethods, 'register' | 'errors'>> {
  className?: string;
  onChange?: () => void;
  rules?: ValidationRules;
  label: string;
  checked?: boolean;
  name?: string;
  id?: string;
}
