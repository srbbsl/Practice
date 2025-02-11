import { Button, IconButton, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router";
import { useUserLoginMutation } from "./authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addUser } from "./userSlice";
import { useState } from "react";



export const Login = () => {
    const [loginUser, { isLoading }] = useUserLoginMutation();
    const nav = useNavigate();
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    
    return (
        <div className="max-w-[400px] p-5 mt-[7%] mx-auto space-y-6">
            <div>
                <Typography variant="h4" color="blue-gray">
                    Login
                </Typography>
                <Typography className="mt-1 font-normal" color="gray">
                    Enter your details to login
                </Typography>
            </div>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={ async (val) => {
                    try {
                        const response = await loginUser(val).unwrap();
                        // console.log(response);
                        dispatch(addUser(response.data));
                        toast.success('successfully login')
                    } catch (err) {
                        // console.log(err);
                        toast.error(err.data?.message || err.data);
                    }
                }}
            >
                {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
                    <form className='space-y-4'onSubmit={handleSubmit}>
                        <div>
                            <Input 
                            type='email'
                            name='email' //initial values ma j xa tei rakhne
                            label='Email'
                            onChange={handleChange}
                            value={values.email}
                        />
                        </div>
                        
                         <div className="relative flex w-full max-w-[24rem]">
                            <Input
                                type={show ? "text" : "password"}
                                label="Password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                className="pr-20"
                                containerProps={{
                                className: "min-w-0",
                                }}
                            />
                            <IconButton variant="text" className="!absolute right-1 rounded">
                                <i className={show ? "fa fa-eye" : "fa fa-eye-slash"} 
                                    onClick={() => setShow(!show)}
                                />  
                            </IconButton>
                        </div>

                        <Button loading={isLoading} type='submit' fullWidth size="sm">
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>

            <Typography color="gray" className=" text-center font-normal">
                Don't have an account?
                <Button size="sm" variant="text">
                    <Link to="/signup" className="font-bold text-lg text-gray-900"> {/* href rakhda page reload hunxa */}
                    Sign Up
                    </Link>    
                </Button>
                
            </Typography>
        </div>
    )
};