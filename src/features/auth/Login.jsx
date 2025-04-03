import { Button, IconButton, Input, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { useUserLoginMutation } from './authApi'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser } from './userSlice'

export const Login = () => {
  const [loginUser, {isLoading}] = useUserLoginMutation();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center items-start py-12 min-h-screen bg-blue-gray-200">
      <div className="max-w-[400px] w-full p-6 bg-white shadow-xl rounded-lg border border-blue-200">
        <Typography variant="h4" className="text-center text-blue-600 font-semibold">
          Sign In
        </Typography>
        <Typography className="mt-1 text-center text-blue-700">
          Nice to meet you! Enter your details to sign in.
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={async (val) => {
            try {
              const response = await loginUser(val).unwrap();
              // console.log(response)
              dispatch(addUser(response.data));
              toast.success('successfully login');
            } catch (err) {
              toast.error(err.data?.message || err.data);
            }
          }}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <Input 
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  label="Email"
                  className="focus:border-blue-600"
                />
              </div>
              <div className='relative flex'>
                <Input 
                  name="password"
                  type={show ? 'text' : 'password'}
                  onChange={handleChange}
                  value={values.password}
                  label="Password"
                  className="focus:border-blue-600"
                />
                <IconButton variant='text' className='!absolute right-1'>
                  <i className={show ? 'fa fa-unlock' : 'fa fa-lock'} onClick={() => setShow(!show)} />
                </IconButton>
              </div>
              <Button loading={isLoading} className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white" type="submit">
                Submit
              </Button>
            </form>
          )}
        </Formik>
        <Typography className="text-center mt-4 text-blue-700">
          Don't have an account ? 
          <Button variant="text" size="sm" className="ml-1 text-blue-600 hover:text-blue-700 text-lg">
            Sign Up
          </Button>
        </Typography>
      </div>
    </div>
  )
}
