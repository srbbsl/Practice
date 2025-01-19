import { configureStore } from "@reduxjs/toolkit";
import { blogSlice } from "../redux/blogSlice";
import { cardSlice } from "../redux/cardSlice";


export const store = configureStore({
    reducer: {
        blogSlice: blogSlice.reducer,
        cardSlice: cardSlice.reducer
    },
    
});