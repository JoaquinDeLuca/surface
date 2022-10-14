import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from "../../api";



const hoodie = createApi ({
    reducerPath:"hoodieApi",

    baseQuery:fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: builder => ({
        GetHoodie: builder.query({
            query: (params) => `buzos/${params}`
        })
    }),

})

export default hoodie
export const { useGetHoodieQuery } = hoodie