import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
 
export function RemoveDialog() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
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
            <Button variant="gradient" color="green" onClick={handleOpen}>
                <span>Confirm</span>
            </Button>
            </DialogFooter>
        </Dialog>
    </>
  );
}