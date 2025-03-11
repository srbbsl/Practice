import React from 'react'
import { ProductCard } from './ProductCard'
import { useGetProductsQuery } from './productApi'

export const ProductList = () => {

  const { data, isLoading, error } = useGetProductsQuery();

  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>{error.data?.message}</h1>

  return (
    <div className='p-5 grid grid-cols-4 gap-4'>
      {data && data.map((product) => {
        return <ProductCard key={product._id} product={product} />
      })}
    </div>
  )
}
