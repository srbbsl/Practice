import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { removeBlog } from "../redux/blogSlice";
 
export function RemoveDialog({ index }) {
  const [edit, setEdit] = useState(false);
  const [del, setDelete] = useState(false);
 
  const handleEdit = () => setEdit(!edit);
  const handleDelete = () => setDelete(!del);
 
  return (
    <>
        <IconButton onClick={handleEdit} color="green" size="sm">
            <i className="fas fa-edit" />
        </IconButton>
        
        <IconButton onClick={handleDelete} color="red" size="sm">
            <i className="fas fa-trash" />
        </IconButton>
        
        <Dialog open={edit} handler={handleEdit}>
            <DialogHeader>Edit Your Blog</DialogHeader>
        <DialogBody>
            Edit your blog to add more content.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleEdit}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleEdit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>

      <Dialog open={del} handler={handleDelete}>
        <DialogHeader>Delete Your Blog</DialogHeader>
        <DialogBody>
          Delete your blog to remove unnecessary content.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleDelete}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => {
            dispatchEvent(removeBlog(index));
            handleDelete();
          }}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}