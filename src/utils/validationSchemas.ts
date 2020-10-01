import * as yup from 'yup';

export const register = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  repeatPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
});

export const login = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

export const word = yup.object().shape({
  word: yup.string().required(),
  translation: yup.string().required(),
});
