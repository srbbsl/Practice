import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { addBlog } from "../redux/blogSlice";
import { nanoid } from "@reduxjs/toolkit";


const valSchema = Yup.object({
  title: Yup.string().required('Please provide the title field'), //.min(5).max(200)
  detail: Yup.string().min(5).max(200).required(),
  // location: '',
  genres: Yup.array().length(1).required(),
  // country: '',
})

export const AddForm = () => {

    const dispatch = useDispatch();
    const nav = useNavigate();

    return (
      <div className="max-w-[400px] p-5">

        <Formik
          initialValues={{
            title: '',
            detail: '',
            location: '',
            genres: [],
            country: '',
          }}

          onSubmit={(val) => {
            // console.log(val);
            toast.success('Successfully Added');
            dispatch(addBlog({ ...val, id: nanoid() }));
            nav(-1);
          }}

          validationSchema={valSchema}

        >

         
        
          {({ handleChange, handleSubmit, values, errors, setFieldValue, touched }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Input 
                      label="title"
                      name='title'
                      value={values.title}
                      onChange={handleChange}
                      // onChange={(e) => {
                      //   console.log(e.target.value);
                      // }}
                    />

                    {errors.title && touched.title && <p className="text-red-600 text-sm">{errors.title}</p>}
                  </div>

                  <div className="space-x-5">
                    <Typography variant="h6">Select Location</Typography>
                    <div className="space-x-20">
                      <Radio
                        label="Indoor"
                        name="location"
                        value={'indoor'}
                        color="red"
                        onChange={handleChange}
                    />
                      <Radio
                        label="Outdoor"
                        name="location"
                        value={'outdoor'}
                        color="green"
                        onChange={handleChange}
                      />
                    </div>
                    
                  </div>

                  <div >
                    <div className="space-x-5">
                        <Typography variant="h6">Select Genre</Typography>
                          <div className="space-x-20">
                            <Checkbox
                            label="Horror"
                            name="genres"
                            value={'horror'}
                            color="red"
                            onChange={handleChange}
                          />
                          <Checkbox
                            label="Comedy"
                            name="genres"
                            value={'comedy'}
                            color="yellow"
                            onChange={handleChange}
                          />
                          </div>
                    </div>
                    
                    {errors.genres && touched.genres && <p className="text-red-600 text-sm">{errors.genres}</p>}
                  </div>

                  <div className="space-y-3">
                    <Typography variant="h6">Select a Country</Typography>
                    <Select 
                      label="select country"
                      onChange={(e) => setFieldValue('country', e)}
                      >
                        <Option value='Nepal'>Nepal</Option>
                        <Option value='India'>India</Option>
                        <Option value='Bhutan'>Bhutan</Option>
                        <Option value='Singapore'>Singapore</Option>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Textarea 
                      label="detail"
                      name='detail' 
                      value={values.detail}
                      onChange={handleChange}
                    />

                      {errors.detail && touched.detail && <p className="text-red-600 text-sm">{errors.detail}</p>}   
                  </div>


                  
                    <Button type='submit'>Submit</Button>
                  
                  
            </form>
          )
        }
          
            
       
            

        </Formik>
        
      </div>
    )
};