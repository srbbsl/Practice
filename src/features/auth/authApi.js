import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from '../../app/apiUrl';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (builder) => ({
        userLogin: builder.mutation({
            query: (q) => ({
                url: '/users/login',
                body: q,
                method: 'POST',
            })
    }),
        userRegister: builder.mutation({
            query: (q) => ({
                url: '/users/register',
                body: q,
                method: 'POST',
            })
    }),
    })
});

export const { useUserLoginMutation, useUserRegisterMutation } = authApi;