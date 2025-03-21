import React from 'react'
import { Button, Card, Typography } from "@material-tailwind/react";
import { useGetOrdersQuery } from './orderApi';
import { useNavigate } from 'react-router';

const TABLE_HEAD = ["Order_Id", "Total Amount", "View Order Detail"];

export const AllOrder = ({ user }) => {
    // console.log(user)
    const  {data, isLoading, error } = useGetOrdersQuery(user?.token);
    const nav = useNavigate();
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <h1>{error.data?.message}</h1>
    // console.log(data)
  return (
    <div>
        {data.length === 0 ? <h1 className='text-center font-bold text-xl mt-8'>No Orders Found</h1> :
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
                    {data.map(({ _id, totalAmount }, index) => {
                        const isLast = index === data.length - 1;
                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            
                        return (
                        <tr key={_id}>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {_id}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    Rs.{totalAmount}
                                </Typography>
                            </td>
                            <td className={classes}>
                                <Button 
                                    onClick={() => nav(`/order/${_id}`)}
                                    variant='text'>
                                        View Detail
                                </Button>
                            </td>
                            
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
        }
    </div>
  )
}


 

