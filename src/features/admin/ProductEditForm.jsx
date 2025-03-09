import { Button, Input, Typography, Card, Select, Option } from '@material-tailwind/react'
import { Formik } from 'formik'
import { productSchema, validCategory, validImageType } from '../utils/validator';
import { toast } from 'react-toastify';
import { base } from '../../app/apiUrls';
import { useUpdateProductMutation } from '../product/productApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useState } from 'react';






export const ProductEditForm = ({ product }) => {
    // console.log(product)
    const [updateProduct, { isLoading }] = useUpdateProductMutation();
    const { user } = useSelector((state) => state.userSlice);
    const nav = useNavigate();
    const [imageError, setImageError] = useState(null);
    const [imageReview, setImageReview] = useState(product.image);
    console.log(imageError)

    return (
        <div className="flex justify-center items-start p-10 h-screen bg-gray-100">
            <Card className="p-6 w-full max-w-md shadow-lg rounded-lg bg-white">
                <Formik
                    initialValues={{
                        title: product.title,
                        description: product.description,
                        price: product.price,
                        category: product.category,
                        image: null,
                    }}
                    onSubmit={ async (val) => {
                        // console.log(val);
                        if (imageError) return;
                        const formData = new FormData();
                        formData.append('title', val.title);
                        formData.append('description', val.description);
                        formData.append('price', val.price);
                        formData.append('category', val.category);
                        formData.append('image', val.image);
                        try {
                           if(val.image === null){
                            await updateProduct({
                                body: formData,
                                id: product._id,
                                token: user.token,
                            }).unwrap();
                           } else {
                            formData.append('image', val.image);
                            await updateProduct({
                                body: formData,
                                id: product._id,
                                token: user.token,
                            }).unwrap();
                           } 
                           toast.success('Product updated successfully');
                           nav(-1);
                        } catch (err) {
                            console.log(err)
                            toast.error(err.data?.message);
                        }
                        
                    }}
                    validationSchema={productSchema}
                >
                    {({ handleChange, handleSubmit, setFieldValue, values, errors, touched }) => (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Typography variant="h4" color="blue-gray" className="text-center">
                                    Edit Product
                                </Typography>
                              
                            </div>
                            

                            <div>
                                <Input
                                    onChange={handleChange}
                                    value={values.title}
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
                                    label='Choose a Category' 
                                    value={values.category}
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

                            <div>
                                <Input
                                    label="Select an image"
                                    type="file"
                                    name="image"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        // console.log(file)
                                        setFieldValue('image', file);
                                        
                                        if (validImageType.includes(file?.type)) {
                                            setImageError(null);
                                            setImageReview(URL.createObjectURL(file));
                                        } else {
                                            setImageError('Invalid Image Type');
                                            setImageReview(null);
                                        }
                                        
                                    }}  
                                />
                                    
                                 {/* <h1>{imageError}</h1>                */}
                                {imageError && touched.image && (
                                    <p className="text-red-600 text-sm mt-1">{imageError}</p>
                                )}

                                {!imageError && values.image ? (
                                    <div>
                                        <img className='w-full h-[150px] object-cover' src={imageReview} alt='img' />
                                    </div>
                                ) : !imageError && imageReview && (
                                    <div>
                                        <img className='w-full h-[150px] object-cover' src={`${base}/${imageReview}`} alt='img' />
                                    </div>
                                )}
                            </div>                            

                            
                            {/* Submit Button */}
                            <Button
                                loading= {isLoading}
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
