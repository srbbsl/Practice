import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RemoveDialog } from "./RemoveDialog";

export function BlogCard({ blog, index }) {
  return (
    <Card>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {blog.title}
        </Typography>
        <Typography>{blog.detail}</Typography>
      </CardBody>
      <CardFooter className="pt-0 space-y-3">
        <div className="space-x-4 flex justify-end">
          <RemoveDialog index={index} blog={blog} />
        </div>
      </CardFooter>
    </Card>
  );
}
