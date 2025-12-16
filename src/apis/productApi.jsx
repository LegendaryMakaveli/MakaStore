import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_DUMMY_STORE_BASE_URL

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "/products",
        }),

        getSingleProduct:builder.query({
            query:(id)=>`/products/${id}`
        }),

        getJustFourProducts: builder.query({
            query: () => "/products?limit=4",
        }),
        getProductsRange: builder.query({
            query: ({ skip = 0, limit = 4 }) =>
             `/products?skip=${skip}&limit=${limit}`,
        }),
    }),
});

export const {useGetAllProductsQuery, useGetSingleProductQuery, 
            useGetJustFourProductsQuery, useGetProductsRangeQuery} = productApi;