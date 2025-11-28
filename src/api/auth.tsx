import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from '../model/user'

export const authApi = createApi({
  reducerPath: 'authApi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/auth/' }),
  endpoints: (build) => ({
    postAuth: build.mutation<User, {username:string,password:string}>({
      query: (credentials) => ({
        url: `login`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})


export const { usePostAuthMutation } = authApi