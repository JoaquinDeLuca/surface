import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import api from "../../api";

const authApi = createApi({
    reducerPath: 'authAPI',

    baseQuery: fetchBaseQuery({
        baseUrl: `${api}auth`
    }),

    endpoints: (builder) => ({
        
      SignIn: builder.mutation({
        query: (payload) => ({
          url: '/signin',
          method: 'POST',
          body: payload,
        }),
      }),

      CreateAdmin: builder.mutation({
        query: (payload) => ({
          url: '/createAdmin',
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

      SignOut: builder.mutation({
        query: (payload) => ({
            url: '/signout',
            method: 'POST',
            body: payload
        })
      }),
      itbuyer:  builder.mutation({
        query: (payload) => ({
            url: '/buyer',
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
  useSignOutMutation,
  useCreateAdminMutation,
  useItbuyerMutation
} = authApi