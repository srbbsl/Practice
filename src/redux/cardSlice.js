import { createSlice } from "@reduxjs/toolkit";



export const cardSlice = createSlice({
    name: 'cardSlice',
    initialState: {
       cards: []
    },
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
    }

});

export const { addCard } = cardSlice.actions;