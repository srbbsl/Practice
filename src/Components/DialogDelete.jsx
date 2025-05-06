import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeBlog } from "../redux/blogSlice";



export const DialogDelete = ({index}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const dispatch = useDispatch();

    return (
        <>
            <IconButton onClick={handleOpen} size="sm" color="red">
              <i className="fas fa-trash" />
            </IconButton>

            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>
                    Delete BLog
                </DialogHeader>
                <DialogBody>
                    Are you sure to delete this blog.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color='red'
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button
                        // variant="text"
                        color='green'
                        onClick={() => {
                            dispatch(removeBlog(index));
                            // handleOpen();
                        }}
                        className="mr-1"
                    >
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )  
};
