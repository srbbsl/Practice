import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, IconButton, Typography } from "@material-tailwind/react";
import { base } from '../../app/apiUrls';
import { QtyComponent } from './QtyComponent';
import { removeCart, singleRemoveCart } from './cartSlice';
import { useCreateOrderMutation } from '../order/orderApi';
import { toast } from 'react-toastify';
 
const TABLE_HEAD = ["Item", "Price", "Quantity", "Total"];
 

export const CartPage = () => {

    const [addOrder, {isLoading}] = useCreateOrderMutation();
    const { carts } = useSelector((state) => state.cartSlice);
    const { user } = useSelector((state) => state.userSlice);
    // console.log(carts)
    const dispatch = useDispatch();
    const totalAmount = carts.reduce((acc, item) => acc + item.price * item.qty, 0);

    const handleOrder = async () => {
        try {
            await addOrder({
                token: user.token,
                totalAmount,
                products: carts.map((cart) => ({
                    productId: cart._id,
                    quantity: cart.qty,
                }))
            }).unwrap();
            dispatch(removeCart());
            toast.success('Order placed successfully');
        } catch (err) {
            toast.error(err.data?.message);
        }
    }

  return (
    <div className='p-5 mr-5'>

        {carts.length === 0 ? <div className='text-center text-xl font-bold'>No product added</div>:

        <div >
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                        <th
                            key={head}
                            className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                            <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                            >
                            {head}
                            </Typography>
                        </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {carts.map((cart , index) => {
                        const isLast = index === carts.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            
                        return (
                        <tr key={index}>
                            <td className={classes}>
                                <div className='flex gap-3 items-center'>
                                    <div>
                                        <img className='h-[90px] w-[90px] object-cover' src={`${base}${cart.image}`} alt='' />
                                    </div>
                                
                                    <p>{cart.title}</p>
                                </div>
                            </td>
                            <td className={classes}>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                            >
                               Rs. {cart.price}
                            </Typography>
                            </td>
                            <td className={classes}>
                            
                               <QtyComponent cart={cart}/>
                           
                            </td>

                            <td>
                                 <div className='flex gap-2 items-center'>
                                    <p>
                                        {`Rs.${cart.price * cart.qty}`}
                                    </p>
                                    <IconButton
                                        onClick={() => dispatch(singleRemoveCart(index))}
                                        variant='outlined'
                                        className='w-4 h-4 rounded-full'>
                                        <i className='fas fa-times fa-xs' />
                                    </IconButton>
                                </div>
                            </td>                            
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </Card>
            
            {carts.length > 0 && <div className='flex justify-end mt-5 text-xl font-bold'>Total Amount: Rs. {totalAmount}</div>}
            
            <div className='flex justify-end mt-4'>
                <Button 
                    onClick={handleOrder}
                    loading={isLoading}
                    size='sm'>
                        Place Order
                </Button>
            </div>
        </div>
        }
        
    </div>
  )
};


 