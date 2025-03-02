import * as Yup from 'yup';


export const LoginSchema = () => Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export const registerSchema = () => Yup.object({
    username: Yup.string().required('Please provide your username'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});