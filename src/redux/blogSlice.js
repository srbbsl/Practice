import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../app/localStorage";



export const blogSlice = createSlice({
    name: 'blogslice',
    initialState: {
        blogs: getFromLocal(),
    },
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
            setToLocal(state.blogs)
        },
    }
});

export const { addBlog } = blogSlice.actions;