import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../app/apiUrl';


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        
        getProducts: builder.query({
            query: () => ({
                url: '/products',
                methor: 'GET',
            })
        })
        
        
    }),
    
    
});

export const { useGetProductsQuery } = productApi;