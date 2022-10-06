import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"


const userApi = createApi({

    reducerPath: "userApi",


    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/',
    }),


    endpoints: (builder) => ({
        userSignUp: builder.mutation({
            query: (user) => ({
                url: '/auth/signup',
                method: 'POST',
                body: user
            }),
        }),

        userSignIn: builder.mutation({
            query: (user) => ({
                url: '/auth/signin',
                method: 'POST',
                body: user
            }),
        }),

        // getAllUsers: builder.query({
        //     query: () => 'user/'
        // }),

        // getOneUser: builder.query({
        //     query: (id) => `/user/${id}`,

        // }),

    })


})

export default userApi
export const { useUserSignUpMutation, useUserSignInMutation } = userApi