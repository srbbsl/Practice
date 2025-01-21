import { Button, Checkbox, Input, Option, Radio, Select, Textarea, Typography } from "@material-tailwind/react";
import { Formik } from "formik";



export const AddForm = () => {
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
            console.log(val)
          }}
        >

         
        
          {({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      label="title"
                      name='title'
                      value={values.title}
                      onChange={handleChange}
                      // onChange={(e) => {
                      //   console.log(e.target.value);
                      // }}
                    />
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

                  <div>
                    <Textarea 
                      label="detail"
                      name='detail' 
                      value={values.detail}
                      onChange={handleChange}
                    />
                  </div>


                  
                    <Button type='submit'>Submit</Button>
                  
                  
            </form>
          )
        }
          
            
       
            

        </Formik>
        
      </div>
    )
};