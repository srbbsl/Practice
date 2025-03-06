import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { useRemoveProductMutation } from "../product/productApi";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
 
export function RemoveDialog({id}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const[removeProduct, { isLoading }] = useRemoveProductMutation();
  const { user } = useSelector((state) => state.userSlice);
  const handleRemove = async() => {
    try {
        await removeProduct({
            id,
            token: user.token,
        }).unwrap();
        toast.success('Product removed successfully');
        handleOpen();
    } catch (err) {
        handleOpen();
        toast.error(err.data?.message);
    }
  }
 
  return (
    <>
        <IconButton onClick={handleOpen} size='sm' color='red'>
            <i className='fas fa-trash' />
        </IconButton>
        
        <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Delete Product</DialogHeader>
            <DialogBody>
                Are you sure to delete a product?
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
            <Button loading= {isLoading} variant="gradient" color="green" onClick={handleRemove}>
                <span>Confirm</span>
            </Button>
            </DialogFooter>
        </Dialog>
    </>
  );
}