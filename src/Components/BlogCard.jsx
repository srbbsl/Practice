import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    IconButton,
  } from "@material-tailwind/react";
import { DialogDelete } from "./DialogDelete";
import { useNavigate } from "react-router";
   
  export function BlogCard({blog: {title, detail, country, id}, index}) {

    const nav = useNavigate();

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
          <IconButton 
            size="sm" 
            color="blue"
            onClick={() => nav(`/edit-form/${id}`)}  
          >
              <i className="fas fa-edit" />
          </IconButton>
          
          <DialogDelete index={index}/>
        </CardFooter>
      </Card>
    );
  }