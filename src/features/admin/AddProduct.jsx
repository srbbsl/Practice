import { Button, Input, Typography, Card, Select, Option } from '@material-tailwind/react'
import { Formik } from 'formik'
import { useNavigate } from 'react-router'
import { productSchema, validCategory } from '../utils/validator';



export const AddProduct = () => {
    
    const nav = useNavigate();
    

    return (
        <div className="flex justify-center items-start p-10 h-screen bg-gray-100">
            <Card className="p-6 w-full max-w-md shadow-lg rounded-lg bg-white">
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        price: '',
                        category: '',
                    }}
                    onSubmit={ async (val) => {
                        
                        
                    }}
                    validationSchema={productSchema}
                >
                    {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <Typography variant="h4" color="blue-gray" className="text-center">
                                    Add Product
                                </Typography>
                              
                            </div>
                            

                            <div>
                                <Input
                                    onChange={handleChange}
                                    value={values.titile}
                                    label="Title"
                                    type="text"
                                    name="title"
                                />
                                {errors.title && touched.title && (
                                    <p className="text-red-600 text-sm mt-1">{errors.title}</p>
                                )}
                            </div>

                            <div>
                                <Input
                                    onChange={handleChange}
                                    value={values.description}
                                    label="Description"
                                    type="text"
                                    name="description"
                                />
                                {errors.description && touched.description && (
                                    <p className="text-red-600 text-sm mt-1">{errors.description}</p>
                                )}
                            </div>

                            <div>
                                <Input
                                    onChange={handleChange}
                                    value={values.price}
                                    label="Price"
                                    type="number"
                                    name="price"
                                />
                                {errors.price && touched.price && (
                                    <p className="text-red-600 text-sm mt-1">{errors.price}</p>
                                )}
                            </div>

                            <div>
                                <Select
                                    label='Choose Category' 
                                    onChange={(e) => setFieldValue('category', e)}>
                                        {validCategory.map((cat) => <Option key={cat} value={cat}>{cat}</Option>)}
                                        
                                        {/* <option value='electronics'>electronics</option>
                                        <option value='jewelery'>jewelery</option>
                                        <option value='clothings'>clothing's</option> */}
                                </Select>
                                {errors.category && touched.category && (
                                    <p className="text-red-600 text-sm mt-1">{errors.category}</p>
                                )}
                            </div>

                            
                            {/* Submit Button */}
                            <Button
                               
                                type="submit" 
                                size="sm" 
                                fullWidth 
                                className="py-2">
                                    Submit
                            </Button>
                        </form>
                    )}
                </Formik>

               
            </Card>
        </div>
    )
}
