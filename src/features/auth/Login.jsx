import { Button, IconButton, Input, Typography, Card } from '@material-tailwind/react'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { LoginSchema } from '../utils/validator'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useLoginUserMutation } from './authApi'
import { useDispatch } from 'react-redux'
import { setUserToLocal } from './userSlice'

export const Login = () => {
    const[loginUser, {isLoading}] = useLoginUserMutation();
    const [pass, setPass] = useState(false);
    const nav = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="p-6 w-full max-w-md shadow-lg rounded-lg bg-white">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={ async (val) => {
                        try {
                            const response = await loginUser(val).unwrap();
                            // console.log(response);
                            dispatch(setUserToLocal(response.data));
                            toast.success('Login successfully');
                        } catch (err) {
                            console.log(err)
                            toast.error(err.data?.message);
                        }
                        
                    }}
                    validationSchema={LoginSchema}
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Typography variant="h4" color="blue-gray" className="text-center">
                                    Login
                                </Typography>
                                <Typography color="gray" className="mt-1 mb-5 font-normal text-center">
                                    Nice to meet you! Enter your details to login.
                                </Typography>
                            </div>
                            

                            {/* Email Input */}
                            <div>
                                <Input
                                    onChange={handleChange}
                                    value={values.email}
                                    label="Email"
                                    type="email"
                                    name="email"
                                />
                                {errors.email && touched.email && (
                                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <Input
                                    onChange={handleChange}
                                    value={values.password}
                                    label="Password"
                                    type={pass ? 'text' : 'password'}
                                    name="password"
                                />
                                <IconButton
                                    onClick={() => setPass(!pass)}
                                    variant="text"
                                    size="sm"
                                    className="!absolute right-2 top-2"
                                >
                                    <i className={`fa ${pass ? 'fa-unlock' : 'fa-lock'}`} />
                                </IconButton>
                                {errors.password && touched.password && (
                                    <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <Button
                                loading={isLoading} 
                                type="submit" 
                                size="sm" 
                                fullWidth 
                                className="py-2">
                                    Submit
                            </Button>
                        </form>
                    )}
                </Formik>

                {/* Sign Up Link */}
                <Typography color="gray" className="mt-4 text-center">
                    Don't have an account? 
                    <Button
                        onClick={() => nav('/register')} 
                        variant="text" 
                        size="sm" 
                        className="text-blue-500 text-[18px]">
                            Sign Up
                    </Button>
                </Typography>
            </Card>
        </div>
    )
}
