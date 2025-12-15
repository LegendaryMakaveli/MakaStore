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
    }),
});

export const {useGetAllProductsQuery, useGetSingleProductQuery} = productApi;