import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function BlogCard({blog: {title, detail}}) {
    return (
      <Card className="bg-blue-gray-100 border border-blue-gray-200">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {detail}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button size="sm" color="blue">Read More</Button>
        </CardFooter>
      </Card>
    );
  }