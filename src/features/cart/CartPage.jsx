import React from 'react'
import { useSelector } from 'react-redux'
import { Button, Card, Typography } from "@material-tailwind/react";
import { base } from '../../app/apiUrls';
import { QtyComponent } from './QtyComponent';
 
const TABLE_HEAD = ["Item", "Price", "Quantity", "Total"];
 

export const CartPage = () => {

    const { carts } = useSelector((state) => state.cartSlice);
    console.log(carts)

    const totalAmount = carts.reduce((acc, item) => acc + item.price * item.qty, 0);

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
                            <td className={classes}>
                                {`Rs.${cart.price * cart.qty}`}
                            </td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </Card>
            {carts.length > 0 && <div className='flex justify-end mt-5 text-xl font-bold'>Total Amount: Rs. {totalAmount}</div>}
            <div className='flex justify-end mt-4'>
                <Button size='sm'>Place Order</Button>
            </div>
        </div>
        }
        
    </div>
  )
};


 