import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import api from "../../api";


const products = createApi({
    reducerPath: 'products',

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        readOne: builder.query({
            query: (params) => `products/${params}`
        }), 
        editProduct: builder.mutation ({
            query: (payload) => ({
                url: '/products/edit',
                method: 'PATCH',
                body: payload,
              }),
        }),
        deleteProduct:  builder.mutation ({
            query: (payload) => ({
                url: '/products/delete',
                method: 'DELETE',
                body: payload,
              }),
        }),
    })

})

export default products
export const { 
    useReadOneQuery, 
    useEditProductMutation,
    useDeleteProductMutation
 } = products
