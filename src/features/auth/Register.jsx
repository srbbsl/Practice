import { Button, IconButton, Input, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { registerSchema } from '../../utils/validator';
import { useNavigate } from 'react-router';

export const Register = () => {
    const [pass, setPass] = useState(false);
    const nav = useNavigate();
    
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="max-w-[400px] w-full bg-white shadow-md rounded-lg p-6">
                <Formik
                    initialValues={{ username: '', email: '', password: '' }}
                    onSubmit={(val) => {}}
                    validationSchema={registerSchema}
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="text-center">
                                <Typography variant="h4" color="blue-gray">
                                    Sign up
                                </Typography>
                                <Typography color="gray" className="mt-1 text-sm">
                                    Welcome back! Please enter your details to register.
                                </Typography>
                            </div>

                            <div>
                                <Input
                                    onChange={handleChange}
                                    value={values.username}
                                    label="Username"
                                    type="text"
                                    name="username"
                                />
                                {errors.username && touched.username && (
                                    <p className="text-red-500 text-sm">{errors.username}</p>
                                )}
                            </div>

                            <div>
                                <Input
                                    onChange={handleChange}
                                    value={values.email}
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                />
                                {errors.email && touched.email && (
                                    <p className="text-red-500 text-sm">{errors.email}</p>
                                )}
                            </div>

                            <div className="relative">
                                <Input
                                    onChange={handleChange}
                                    value={values.password}
                                    label="Password"
                                    type={pass ? 'text' : 'password'}
                                    name="password"
                                />
                                {errors.password && touched.password && (
                                    <p className="text-red-500 text-sm">{errors.password}</p>
                                )}

                                <IconButton
                                    onClick={() => setPass(!pass)}
                                    variant="text"
                                    size="sm"
                                    className="!absolute right-2 top-2 rounded"
                                >
                                    <i className={`fa ${pass ? 'fa-unlock' : 'fa-lock'}`} />
                                </IconButton>
                            </div>

                            <Button type="submit" size="md" fullWidth>
                                Submit
                            </Button>
                        </form>
                    )}
                </Formik>

                <Typography color="gray" className="mt-4 text-center text-sm">
                    Already have an account?
                    <Button 
                        onClick={() => nav(-1)}
                        variant="text" size="sm" className="text-blue-600">
                            Login
                    </Button>
                </Typography>
            </div>
        </div>
    );
};
