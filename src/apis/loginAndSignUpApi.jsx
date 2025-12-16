import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_DUMMY_STORE_BASE_URL

export const loginAndSignUpApi = createApi({
    reducerPath: "loginAndSignUpApi",
    baseQuery: fetchBaseQuery({baseUrl:URL}),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/auth/signUp",
                method: "POST",
                body: data
            })
        }),
        login:builder.mutation({
            query:(data)=>({
                url:"/auth/login",
                method: "POST",
                body:data
            })
        })
    })
});

export const { useRegisterMutation, useLoginMutation} = loginAndSignUpApi;
