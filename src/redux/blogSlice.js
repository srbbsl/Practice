import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../app/localStorage";



export const blogSlice = createSlice({
    name: 'blogSlice',
    initialState: {
        blogs: getFromLocal(),
    },
    reducers: {
        addblog: (state, action) => {
            state.blogs.push(action.payload);
            setToLocal(state.blogs);
        },
        removeblog: (state, action) => {
            state.blogs.splice(action.payload, 1);
            setToLocal(state.blogs);
        },

    }
});

export const { addblog, removeblog } = blogSlice.actions;