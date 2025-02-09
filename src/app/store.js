import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";



export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMIddleware) => getDefaultMIddleware()
    .concat([
        authApi.middleware
    ])
});