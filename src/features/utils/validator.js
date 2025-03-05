import * as Yup from 'yup';

export const validCategory = ['electronics', 'jewelery', 'clothing\'s'];

export const LoginSchema = () => Yup.object({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export const registerSchema = () => Yup.object({
    username: Yup.string().required('Please provide your username'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export const productSchema = () => Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required'),
    // category: Yup.string().isValid(validCategory).required('Category is required'),
});