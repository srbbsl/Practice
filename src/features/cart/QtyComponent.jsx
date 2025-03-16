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
    <div className='flex gap-4'>
        <IconButton 
          disabled = {cart.qty === 1} 
          onClick={() => handleChange(false)} 
          size='sm'>
            <i className='fas fa-minus' />
        </IconButton>

        <p>{cart.qty}</p>

        <IconButton 
          onClick={() => handleChange(true)} 
          size='sm'>
            <i className='fas fa-plus' />
        </IconButton>
    </div>
  )
}
