import { Button, Input } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'

export const Login = () => {
  return (
    <div className='p-4 max-w-[400px]'>
        <Formik>
            {() => (
                <form >
                    <div>
                        <Input label='Email' type='email' name='email'/>
                    </div>

                    <div>
                        <Input label='Email' type='email' name='email'/>
                    </div>

                    <Button>
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    </div>
  )
}
