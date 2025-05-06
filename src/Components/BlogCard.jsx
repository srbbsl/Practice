import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
import { DialogDelete } from "./DialogDelete";
   
  export function BlogCard({blog: {title, detail, country}, index}) {
    return (
      <Card className="bg-blue-gray-100 border border-blue-gray-200">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {detail}
          </Typography>
          <Typography>
            {country}
          </Typography>
          
        </CardBody>
        <CardFooter className="pt-0 flex justify-end gap-2">
          <IconButton size="sm" color="blue">
              <i className="fas fa-edit" />
          </IconButton>
          
          <DialogDelete index={index}/>
        </CardFooter>
      </Card>
    );
  }