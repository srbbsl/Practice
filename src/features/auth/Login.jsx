import { Button, Input, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

export const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <div className="max-w-[400px] w-full p-6 bg-white shadow-lg rounded-lg border border-blue-200">
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
          onSubmit={(val) => {}}
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
              <div>
                <Input 
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  label="Password"
                  className="focus:border-blue-600"
                />
              </div>
              <Button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white" type="submit">
                Submit
              </Button>
            </form>
          )}
        </Formik>
        <Typography className="text-center mt-4 text-blue-700">
          Don't have an account? 
          <Button variant="text" size="sm" className="ml-1 text-blue-600 hover:text-blue-700">
            Sign Up
          </Button>
        </Typography>
      </div>
    </div>
  )
}
