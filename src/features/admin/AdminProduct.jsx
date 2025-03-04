import React from 'react'
import { useGetProductsQuery } from '../product/productApi';

export const AdminProduct = () => {

    const {data, isLoading, error} = useGetProductsQuery();
    console.log(data);

  return (
    <div>

    </div>
  )
}
