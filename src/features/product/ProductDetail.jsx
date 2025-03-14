import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetProductQuery } from './productApi';
import { base } from '../../app/apiUrls';
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../cart/cartSlice';

export const ProductDetail = () => {

    const { id } = useParams();
    const {data, isLoading, error} = useGetProductQuery(id);
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error.data?.message}</h1>
    // console.log(data)

  return (
    <div className='grid grid-cols-3 p-4 gap-5'>
        <div>
            <img src={`${base}${data.image}`} alt=''  />
        </div>

        <div className='space-y-3'>
            <h1>Product : {data.title}</h1>
            <p>Description : {data.description}</p>
            <p>Price: Rs {data.price}</p>
        </div>

        <div>
            <CartTable product={data}/>
        </div>
    </div>
  )
};

 
export function CartTable({ product }) {

  const { user } = useSelector((state) => state.userSlice);
  const { carts } = useSelector((state) => state.cartSlice);
  const cart = carts.find((cart) => cart._id === product._id)
  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleAdd = () => {
      dispatch(setCart({...product, qty}));
      nav('/cart-page');
  }
  const [qty, setQty] = useState(cart?.qty ?? 1);
  

  return (
    <Card className="mt-6 flex items-center gap-5 w-[200px] h-[150px]">
      <Typography className='text-black text-lg font-bold'>Product Add</Typography>
      <div className='flex gap-4'>
        <IconButton 
          disabled = {qty === 1} 
          onClick={() => setQty(qty - 1)} 
          size='sm'>
            <i className='fas fa-minus' />
        </IconButton>

        <p>{qty}</p>

        <IconButton 
          onClick={() => setQty(qty + 1)} 
          size='sm'>
            <i className='fas fa-plus' />
        </IconButton>
      </div>

      <div>
        <Button
          disabled={!user || user?.role === 'admin'} 
          onClick={handleAdd} 
          size='sm'>
            Add to cart
        </Button>
      </div>
      
      
    </Card>
  );
}