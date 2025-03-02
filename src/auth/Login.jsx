import { Button, IconButton, Input } from '@material-tailwind/react'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { LoginSchema } from '../utils/validator'

export const Login = () => {

    const [pass, setPass] = useState(false);

  return (
    <div className='p-4 max-w-[400px]'>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(val) => {

            }}
            validationSchema={LoginSchema}
        >
            {({ handleChange, handleSubmit, values, errors, touched}) => (
                <form 
                    onSubmit={handleSubmit}
                    className='space-y-4'>
                    <div>
                        <Input
                            onChange={handleChange} 
                            value={values.email}
                            label='Email' 
                            type='email' 
                            name='email'
                        />   

                        {errors.email && touched.email && <p className='text-red-600 text-[15px]'>{errors.email}</p>}
                    </div>

                    <div className='relative'>
                        <Input
                            onChange={handleChange}
                            value={values.password} 
                            label='Password' 
                            type={pass ? 'text' : 'password'} 
                            name='password'
                        />

                        <IconButton 
                            onClick={() => setPass(!pass)}
                            variant='text' 
                            size='sm' 
                            className='!absolute right-1 top-1 rounded'>
                                <i className={`fa ${pass ? 'fa-unlock' : 'fa-lock'}`} />
                        </IconButton>

                        {errors.password && touched.password && <p className='text-red-600 text-[15px]'>{errors.password}</p>}
                    </div>

                    <Button 
                        type='submit'
                        size='sm' 
                        fullWidth 
                        className='py-[9px]'>
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    </div>
  )
}
