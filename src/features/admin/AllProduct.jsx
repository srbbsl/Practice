import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { useGetProductsQuery } from "../product/productApi";
import { baseApi } from "../../app/apiUrl";



const TABLE_HEAD = ["Product", "Title", "Product_ID", "Edit", "Remove"];

export const AllProduct = () => {
    const { data, isLoading, error } = useGetProductsQuery();
    if (isLoading) {
        return <Typography>Loading....</Typography>
    }
    // console.log(data)

        
    return (
        <div className="p-5 mr-20 ml-20 space-y-3">
            <div className="flex justify-end">
                <Button color="blue" size="sm">
                    Add Product
                </Button>
            </div>
            <div>
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
                        {data.map(({ _id, image, title, description }, index) => {
                            const classes =  "p-4 border-b border-blue-gray-50";            
                            return (
                            <tr key={_id}>
                                <td className={classes}>
                                    <Avatar src={`${baseApi}/${image}`} alt="avatar" variant="rounded" />
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
                                    {_id}
                                </Typography>
                                </td>
                                <td className={classes}>
                                <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    Edit
                                </Typography>
                                </td>
                                <td className={classes}>
                                <Typography
                                    as="a"
                                    href="#"
                                    variant="small"
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    Remove
                                </Typography>
                                </td>
                            </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    )
 
    
};


 

 
