import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "../redux/blogSlice";


export const store = configureStore({
    reducer: {
        blogSlice: blogSlice.reducer,
    }
});