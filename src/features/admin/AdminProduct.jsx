import React from 'react'
import { useGetProductsQuery } from '../product/productApi';
import { Avatar, Button, IconButton } from '@material-tailwind/react';
import { Card, Typography } from "@material-tailwind/react";
import { base } from '../../app/apiUrls';
import { useNavigate } from 'react-router';
import { RemoveDialog } from './RemoveDialog';

 
const TABLE_HEAD = ["Product_image", "Product_name", "Product_price", "Created_at", "Edit", "Remove"];
 


export const AdminProduct = () => {

    const {data, isLoading, error} = useGetProductsQuery();
    console.log(data);
    const nav = useNavigate();


  return (
    <div className='p-4 space-y-2'>
      <div className='flex justify-end'>
        <Button 
          onClick={() => nav('/add-product')}
          size='sm' color='cyan'>
            Add Product
        </Button>
      </div>

       {isLoading && <h1>Loading...</h1>} 

       {data && <Card className="h-full w-full overflow-scroll">
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
            {data.map(({ _id, title, image, createdAt, price }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
  
              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Avatar src={`${base}${image}`} alt={image}/>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {price}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt.substring(0, 10)}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <IconButton 
                      onClick={() => nav(`/edit-product/${_id}`)}
                      size='sm' color='amber'>
                        <i className='fas fa-edit' />
                    </IconButton>
                  </td>
                  <td className={classes}>
                    <RemoveDialog id={_id} />
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>}
      
    </div>
  )
}


 