import { Button, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";



export const AddForm = () => {
    return (
      <div className="max-w-[400px] p-5">

        <Formik
          initialValues={{
            title: '',
            detail: '',
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