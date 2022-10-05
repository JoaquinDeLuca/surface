import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const capApi = createApi({
    reducerPath: 'capApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/'
    }),

    endpoints: (builder) => ({
        readAll: builder.query({
            query: () => 'caps/'
        }),

        readCap: builder.query({
            query: (id) => `/caps/${id}`
        }),

        newCap: builder.mutation({
            query: (capNew) => ({
                url: 'caps/',
                method: 'POST',
                body: capNew
            })
        }),

        removeCap: builder.mutation({
            query: (capRemove) => ({
                url: 'caps/:id',
                method: 'DELETE',
                body: capRemove
            }),

            updateCap: builder.mutation({
                query: (capUpdate) => ({
                    url: 'caps/:id',
                    method: 'PATCH',
                    body: capUpdate
                })
            })
        })

    })

})

export default capApi