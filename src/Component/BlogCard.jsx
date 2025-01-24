

import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    IconButton,
  } from "@material-tailwind/react";
import { RemoveDialog } from "./RemoveDialog";
   
  export function BlogCard({ blog: { title, detail }, index }) {
    return (
      <Card className="">
        <CardBody>
      
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography>
            {detail}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 space-y-3">
          <a href="#" className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
          <div className="space-x-4 flex justify-end">
                
                <RemoveDialog index={index}/>
          </div>
          
        </CardFooter>
      </Card>
    );
  }