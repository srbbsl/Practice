import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductQuery } from '../product/productApi';
import { ProductEditForm } from './ProductEditForm';

export const ProductEdit = () => {
    const {id} = useParams();
    const {data, isLoading, error} = useGetProductQuery(id);
        // console.log("Product ID:", id);
        // console.log("Fetched Data:", data);
    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h1>{error.data?.message}</h1>
    }

  return (
    <div>
       
        {data && <ProductEditForm product={data} />}
    </div>
  )
}

