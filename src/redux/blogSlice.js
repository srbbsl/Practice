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
    }
});

export const { addblog } = blogSlice.actions;