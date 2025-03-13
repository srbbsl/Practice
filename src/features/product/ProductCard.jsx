import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { base } from "../../app/apiUrls";
import { useNavigate } from "react-router";
   
  export function ProductCard({product}) {

    const nav = useNavigate();

    return (
      <Card className="">
        <CardHeader shadow={false} floated={false} className="h-56">
          <img
            src={`${base}${product.image}`}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {product.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              Rs. {product.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {product.description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={() => nav(`/product-detail/${product._id}`)}
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            View More
          </Button>
        </CardFooter>
      </Card>
    );
  }