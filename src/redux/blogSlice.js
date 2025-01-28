import { createSlice } from "@reduxjs/toolkit";



export const blogSlice = createSlice({
    name: 'blogSlice',
    initialState: {
        blogs: [],
    },
    reducers: {
        addblog: (state, action) => {
            state.blogs.push(action.payload);
        },
    }
});

export const { addblog } = blogSlice.actions;