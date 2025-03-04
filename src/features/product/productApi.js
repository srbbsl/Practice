import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.1.67:5000/api/products' }),
    endpoints: (builder) => ({

       getProducts: builder.query({
        query: () => ({
            url: '/',
            method: 'GET'
        })
        }),
    }),

});

export const { useGetProductsQuery } = productApi;