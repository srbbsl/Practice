import { Button, IconButton, Input, Typography, Card } from '@material-tailwind/react'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { registerSchema } from '../utils/validator'
import { useNavigate } from 'react-router'

export const Register = () => {
    const [pass, setPass] = useState(false);
    const nav = useNavigate();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <Card className="p-6 w-full max-w-md shadow-lg rounded-lg bg-white">
                <Formik
                    initialValues={{
                        username: '',
                        email: '',
                        password: '',
                    }}
                    onSubmit={(val) => {}}
                    validationSchema={registerSchema}
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Typography variant="h4" color="blue-gray" className="text-center">
                                    Sign Up
                                </Typography>
                                <Typography color="gray" className="mt-1 mb-5 font-normal text-center">
                                    Nice to meet you! Enter your details to register.
                                </Typography>
                            </div>
                            

                            {/* Email Input */}
                            <div>
                            <Input
                                    onChange={handleChange}
                                    value={values.username}
                                    label="Username"
                                    type="text"
                                    name="username"
                                />
                                {errors.username && touched.username && (
                                    <p className="text-red-600 text-sm mt-1">{errors.username}</p>
                                )}
                            </div>
                            
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
                            <Button type="submit" size="sm" fullWidth className="py-2">
                                Submit
                            </Button>
                        </form>
                    )}
                </Formik>

                {/* Sign Up Link */}
                <Typography color="gray" className="mt-4 text-center">
                    Already have an account? 
                    <Button 
                        onClick={() => nav(-1)}
                        variant="text" 
                        size="sm" 
                        className="text-blue-500 text-[18px]">
                            Sign In
                    </Button>
                </Typography>
            </Card>
        </div>
    )
}
