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

        removeBlog: (state, action) => {
            state.blogs.splice(action.payload, 1);
            setToLocal(state.blogs)
        },
    }
});

export const { addBlog, removeBlog } = blogSlice.actions;