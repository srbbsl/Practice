import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import * as Yup from 'yup';
import { editBlog } from '../redux/blogSlice';
import { toast } from 'react-toastify';



const valSchema = Yup.object({
  title: Yup.string().min(5).max(200).required(),
  detail: Yup.string().min(10).max(500).required(),
  location: Yup.string().required(),
  genres: Yup.array().min(1).required(),
  country: Yup.string().required()
});


export const EditForm = () => {

    const {id} = useParams();
    // console.log(id)
    const { blogs } = useSelector((state) => state.blogSlice); 
    const blog = blogs.find((blog) => blog.id === id);
    // console.log(blog)

    const dispatch = useDispatch();
    const nav = useNavigate();


    
  return (
    <div className='max-w-[300px] p-5'>
      <Formik
        initialValues={{
          title: blog?.title,
          detail: blog?.detail,
          location: blog?.location,
          genres: blog?.genres,
          country: blog?.country,
        }}

        onSubmit={(val) => {
            console.log(val)
            toast.success('Successfully updated');
            dispatch(editBlog({...val, id: blog.id}));
            nav(-1);
        }}

        // validationSchema={valSchema}


      >

        {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => (
          <form onSubmit={handleSubmit} className='space-y-5'>

            <div className='space-y-2'>
            <Typography variant='h6'>Title</Typography>
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
                  checked={values.location.includes('indoor')}
                  label='Indoor'
                  value={'indoor'}
                  name='location' />
                <Radio
                  onChange={handleChange}
                  color='green'
                  checked={values.location.includes('outdoor')}
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
                  checked={values.genres.includes('horror')}
                  label='Horror'
                  value={'horror'}
                  name='genres' />
                <Checkbox
                  onChange={handleChange}
                  color='amber'
                  checked={values.genres.includes('comedy')}
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
                label='select country'
                value={values.country}
                >
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

