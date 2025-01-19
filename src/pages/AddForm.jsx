import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { addBlog } from '../redux/blogSlice';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';

// const m = () => ({ greet: 'hello jee', m: 'io' });

const valSchema = Yup.object({
  title: Yup.string().min(5).max(200).required(),
  detail: Yup.string().min(10).max(500).required(),
  location: Yup.string().required(),
  genres: Yup.array().min(1).required(),
  country: Yup.string().required()
});


const AddForm = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className='max-w-[300px] p-5'>
      <Formik
        initialValues={{
          title: '',
          detail: '',
          location: '',
          genres: [],
          country: ''
        }}

        onSubmit={(val) => {
          toast.success('successfully added');
          dispatch(addBlog({ ...val, id: nanoid() }));
          nav(-1);
        }}

        validationSchema={valSchema}


      >

        {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => (
          <form onSubmit={handleSubmit} className='space-y-5'>

            <div className='space-y-2'>
              <Input
                onChange={handleChange}
                value={values.title}
                label='title'
                name='title'
              />
              {errors.title && touched.title && <p className='text-pink-500'>{errors.title}</p>}
            </div>

            <div>
              <Typography variant='h6'>Select Location</Typography>
              <div className='space-x-5'>
                <Radio
                  onChange={handleChange}
                  color='red'
                  label='Indoor'
                  value={'indoor'}
                  name='location' />
                <Radio
                  onChange={handleChange}
                  color='green'
                  label='Outdoor'
                  value={'outdoor'}
                  name='location'
                />
              </div>
              {errors.location && touched.location && <p className='text-pink-500'>{errors.location}</p>}

            </div>

            <div>
              <Typography variant='h6'>Select Genres</Typography>
              <div className='space-x-5'>
                <Checkbox
                  onChange={handleChange}
                  color='red'
                  label='Horror'
                  value={'horror'}
                  name='genres' />
                <Checkbox
                  onChange={handleChange}
                  color='amber'
                  label='Comedy'
                  value={'comedy'}
                  name='genres' />


              </div>
              {errors.genres && touched.genres && <p className='text-pink-500'>{errors.genres}</p>}

            </div>


            <div className='space-y-2'>
              <Typography variant='h6'>Select Country</Typography>

              <Select
                onChange={(e) => setFieldValue('country', e)}
                label='select country'>
                <Option value='Nepal'>Nepal</Option>
                <Option value='USA'>USA</Option>
                <Option value='UK'>UK</Option>
              </Select>

              {errors.country && touched.country && <p className='text-pink-500'>{errors.country}</p>}

            </div>

            <div className='space-y-2'>
              <Textarea
                onChange={handleChange}
                value={values.detail}
                label='detail' name='detail'></Textarea>
              {errors.detail && touched.detail && <p className='text-pink-500'>{errors.detail}</p>}
            </div>



            <Button type='submit'>Submit</Button>

          </form>
        )
        }





      </Formik>



    </div>
  )
}

export default AddForm