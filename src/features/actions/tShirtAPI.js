import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from "../../api";


const tShirt = createApi ({
    reducerPath:"tShirtApi",

    baseQuery:fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        GetTShirt: builder.query({ query: (params) => `tshirts/${params}` })
    }),

})

export default tShirt
export const { useGetTShirtQuery } = tShirt