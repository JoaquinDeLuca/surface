import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const authApi = createApi({
    reducerPath: 'authAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/auth'
    }),

    endpoints: (builder) => ({
        
      SignIn: builder.mutation({
        query: (payload) => ({
          url: '/signin',
          method: 'POST',
          body: payload,
        }),
      }),
  

      AddUserSignUp: builder.mutation({
        query: (payload) => ({
            url: '/signup',
            method: 'POST',
            body: payload
        })
      }),

      SingOut: builder.mutation({
        query: (payload) => ({
            url: '/singOut',
            method: 'POST',
            body: payload
        })
      }),

    })

})

export default authApi
export const { 
  useSignInMutation,
  useAddUserSignUpMutation,
  useSignOutMutation
} = authApi