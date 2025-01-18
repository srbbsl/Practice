import { Button, Input, Textarea } from "@material-tailwind/react";
import { Formik } from "formik";


export const FormHandle = () => {

    

    return(
        <div className="p-4 max-w-[300px]">
            
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                }}
            >
                {() => (
                    <form className="space-y-3">
                        <div>
                            <Input label='title' name='title'/>
                        </div>
                        <div>
                            <Textarea label='detail' name='detail'></Textarea>
                        </div>
                        <Button type='submit'>Submit</Button>
                    </form>
                )}
            </Formik>
               
        </div>
    )
};  