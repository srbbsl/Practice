import { Button, Input, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { Link } from "react-router";



export const Login = () => {
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
                onSubmit={(val) => {

                }}
            >
                {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
                    <form className='space-y-4'onSubmit={handleSubmit}>
                        <Input 
                            type='email'
                            name='email' //initial values ma j xa tei rakhne
                            label='Email'
                            onChange={handleChange}
                            value={values.email}
                        />
                        <Input 
                            type='password'
                            name='password' //initial values ma j xa tei rakhne
                            label='Password'
                            onChange={handleChange}
                            value={values.password}
                        />
                        <Button fullWidth size="sm">
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>

            <Typography color="gray" className="mt-4 text-center font-normal">
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium text-gray-900"> {/* href rakhda page reload hunxa */}
                    Sign Up
                </Link>    
            </Typography>
        </div>
    )
};