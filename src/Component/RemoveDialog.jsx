import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { removeBlog, editBlog } from "../redux/blogSlice";

export function RemoveDialog({ index, blog }) {
  const [edit, setEdit] = useState(false);
  const [del, setDelete] = useState(false);
  const [updatedBlog, setUpdatedBlog] = useState(blog); // Hold updated values

  const handleEdit = () => setEdit(!edit);
  const handleDelete = () => setDelete(!del);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = () => {
    dispatch(editBlog(updatedBlog)); // Dispatch updated blog
    handleEdit();
  };

  return (
    <>
      <IconButton onClick={handleEdit} color="green" size="sm">
        <i className="fas fa-edit" />
      </IconButton>

      <IconButton onClick={handleDelete} color="red" size="sm">
        <i className="fas fa-trash" />
      </IconButton>

      {/* Edit Dialog */}
      <Dialog open={edit} handler={handleEdit}>
        <DialogHeader>Edit Your Blog</DialogHeader>
        <DialogBody className="space-y-4">
          <Input
            label="Title"
            name="title"
            value={updatedBlog.title}
            onChange={handleChange}
          />
          <Textarea
            label="Details"
            name="detail"
            value={updatedBlog.detail}
            onChange={handleChange}
          />
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleEdit} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleEditSubmit}>
            <span>Save Changes</span>
          </Button>
        </DialogFooter>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog open={del} handler={handleDelete}>
        <DialogHeader>Delete Your Blog</DialogHeader>
        <DialogBody>Are you sure you want to delete this blog?</DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleDelete} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              dispatch(removeBlog(index));
              handleDelete();
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
