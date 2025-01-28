import {
    Card,
    CardBody,
    CardFooter,
    IconButton,
    Typography,
   
  } from "@material-tailwind/react";
import { RemoveDialog } from "./RemoveDialog";
   
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
        <CardFooter className="pt-0 flex justify-end gap-2">
          <IconButton size="sm" color="purple">
            <i className="fas fa-edit" />
          </IconButton>
          
          <RemoveDialog />
        </CardFooter>
      </Card>
    );
  }