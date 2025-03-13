import { createSlice } from '@reduxjs/toolkit'
import { getCartsFromLocal, removeCartsFromLocal, setCartsToLocal } from '../../app/local'


export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        carts: getCartsFromLocal() || []
    },
    reducers: {
        setCart: (state, action) => {
            state.carts.push(action.payload);
            const isExist = state.carts.find((cart) => cart.id === action.payload._id);
            if (isExist) {

            } else {
                state.carts.push(action.payload);
                setCartsToLocal(state.carts);
            }
        },

        removeCart: (state, action) => {
            state.carts = [];
            removeCartsFromLocal();
        }
    }
});

export const { setCart, removeCart } = cartSlice.actions;
