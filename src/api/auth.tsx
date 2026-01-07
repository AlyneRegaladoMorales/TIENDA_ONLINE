import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { User } from '../model/user'
import { API_URL } from '../utils/Constans'

export const authApi = createApi({
  reducerPath: 'authApi', 
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  endpoints: (build) => ({
    postAuth: build.mutation<User, {username:string,password:string}>({
      query: (credentials) => ({
        url: `/auth/login`,
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})


export const { usePostAuthMutation } = authApi