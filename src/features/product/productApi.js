import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../app/apiUrls';

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/products` }),
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => ({
                url: '/',
                method: 'GET',
            }),
            providesTags: ['Product'],
            }),

        addProduct: builder.mutation({
            query: (q) => ({
                url: '/',
                body: q.body,
                headers: {
                    Authorization: q.token
                },
                method: 'POST',
            }),
            invalidatesTags: ['Product'],
            }),

        removeProduct: builder.mutation({
            query: (q) => ({
                url: `/${q.id}`,
                headers: {
                    Authorization: q.token
                },
                method: 'DELETE',
            }),
            invalidatesTags: ['Product'],
            }),
    }),

});

export const { useGetProductsQuery, useAddProductMutation, useRemoveProductMutation } = productApi;