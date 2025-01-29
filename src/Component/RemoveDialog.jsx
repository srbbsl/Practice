import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { removeblog } from "../redux/blogSlice";
 
export function RemoveDialog({ index }) {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);

  const dispatch = useDispatch();
 
  return (
    <>
        <IconButton onClick={handleOpen} size="sm" color="red">
            <i className="fas fa-trash" />
        </IconButton>
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Delete a Blog</DialogHeader>
            <DialogBody>
                Blog will be deleted permanently.
            </DialogBody>
            <DialogFooter>
            <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
            >
                <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={() => {
                dispatch(removeblog(index));
                handleOpen();
            }}>
                <span>Confirm</span>
            </Button>
            </DialogFooter>
        </Dialog>
    </>
  );
}