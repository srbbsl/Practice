import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.67:5000/api/users' }),
    endpoints: (builder) => ({

        loginUser: builder.mutation({
            query: (q) => ({
                url: '/login',
                body: q,
                method: 'POST',
            })
        }),

        registerUser: builder.mutation({
            query: (q) => ({
                url: '/register',
                body: q,
                method: 'POST',
            })
        }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;