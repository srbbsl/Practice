import { IconButton } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { setCart } from './cartSlice';

export const QtyComponent = ({ cart }) => {

   const dispatch = useDispatch();
   const handleChange = (isAdd) => {
    if (isAdd) {
      dispatch(setCart({...cart, qty: cart.qty + 1}));
    } else {
      dispatch(setCart({...cart, qty: cart.qty - 1}));
    }   
    }

  return (
    <div className='flex gap-4 items-center'>
        <IconButton 
          disabled = {cart.qty === 1} 
          onClick={() => handleChange(false)} 
          className='w-6 h-6'>
            <i className='fas fa-minus fa-sm' />
        </IconButton>

        <p className='text-[13px]'>{cart.qty}</p>

        <IconButton 
          onClick={() => handleChange(true)} 
          className='w-6 h-6'>
            <i className='fas fa-plus fa-sm' />
        </IconButton>
    </div>
  )
}
