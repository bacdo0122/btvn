import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email('Email must be a valid email').required('Email is a required field'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters')
    .required('Password is a required field'),
});
