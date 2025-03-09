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

export const validCategory = ['electronics', 'jewelery', 'clothing\'s'];

export const validImageType = ['image/jpg', 'image/jpeg', 'image/png', 'image/svg', 'image/webp', 'image/avif'];

export const productSchema = () => Yup.object({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required'),
    category: Yup.string().oneOf(validCategory, 'Choose valid category').required('Category is required'),
    // image: Yup.mixed().test((val) => {
    //     // console.log(val);
    //     return val && validImageType.includes(val?.type);
    // }).required('Image is required'),
});