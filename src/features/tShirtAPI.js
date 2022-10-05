import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const tShirt = createApi ({
    reducerPath:"tShirtApi",

    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:4000'
    }),

    endpoints: (builder) => ({
        GetTShirt: builder.query({ query: (params) => `/tshirts/${params}` })
    }),

})

export default tShirt
export const { useGetTShirtQuery } = tShirt