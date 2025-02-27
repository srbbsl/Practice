import { Button, Input } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { loginSchema } from '../../utils/validator'

export const Login = () => {
  return (
    <div className='max-w-[400px] p-4'>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(val) => {

            }}
            validationSchema={loginSchema}
        >


            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <Input 
                            onChange={handleChange}
                            value={values.email}
                            label='Email'
                            type='email'
                            name='email'
                        />
                            {errors.email && touched.email && <p className='text-red-500 text-sm'>{errors.email} </p>}
                    </div>

                    <div>
                        <Input 
                            onChange={handleChange}
                            value={values.password}
                            label='Password'
                            type='password'
                            name='password'
                        />
                            {errors.password && touched.password && <p className='text-red-500 text-sm'>{errors.password} </p>}
                    </div>

                    <Button type='submit' size='sm' fullWidth>
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    </div>
  )
}
