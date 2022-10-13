import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const concurseApi = createApi({
    reducerPath: 'concurseApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/concurses'
    }),

    endpoints: (builder) => ({
        readAll: builder.query({
            query: () => '/'
        }),

        topThree: builder.query({
            query: () => '/top'
        }),

        LikeDislike: builder.mutation({
            query: (payload) => ({
                url: '/like',
                method: 'PATCH',
                body: payload
            })
        }),



    })

})

export default concurseApi
export const { useReadAllQuery, useTopThreeQuery, useLikeDislikeMutation } = concurseApi