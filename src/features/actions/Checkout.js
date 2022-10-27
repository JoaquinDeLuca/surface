import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import api from "../../api";



const checkout = createApi({
    reducerPath: 'checkout',


    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({

        pay: builder.mutation({
            query: (body) => ({
                url: 'pago/',
                method: 'POST',
                body: body
            })
        })
    })
})

export default checkout
export const {
    usePayMutation
} = checkout