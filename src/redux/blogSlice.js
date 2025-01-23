import { createSlice } from "@reduxjs/toolkit";



export const blogSlice = createSlice({
    name: 'blogslice',
    initialState: {
        blogs: []
    },
    reducers: {
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
        }
    }
});

export const { addBlog } = blogSlice.actions;