import { createSlice } from "@reduxjs/toolkit";



export const blogSlice = createSlice({
    name: 'blogSlice',
    initialState: {
        blogs: []
    },
    reducers: {
        addBlog: (state, aciton) => {
            state.blogs.push(aciton.payload);
        }
    }
});

export const { addBlog } = blogSlice.actions;