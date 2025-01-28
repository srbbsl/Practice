import {
    Card,
    CardBody,
    CardFooter,
    Typography,
   
  } from "@material-tailwind/react";
   
  export function BlogCard({ blog: {title, detail} }) {
    return (
      <Card>
        <CardBody>
     
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {detail}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          
        </CardFooter>
      </Card>
    );
  }