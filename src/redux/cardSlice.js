import { createSlice } from "@reduxjs/toolkit";



export const cardSlice = createSlice({
    name: 'CardSlice',
    
    initialState: {
        cards: [],
    },

    reducers: {
        addBlog: (state, action) => {
            state.cards.push(action.payload);
        }
    }
});

export const { addBlog } = cardSlice.actions;