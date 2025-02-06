import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../assets/config/urls';

export const Auth = createApi({
  reducerPath: 'Authentication',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: builder => ({
    SignUp: builder.mutation({
      query: userData => ({
        url: '/user/userSignup',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),

    SignIn: builder.mutation({
      query: userData => ({
        url: '/user/userSignin',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),

    SetMode: builder.mutation({
      query: userData => ({
        url: '/user/setMode',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),
    CreateCompany: builder.mutation({
      query: userData => ({
        url: '/user/createCompany',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),
    // ConfirmPassword: builder.mutation({
    //   query: userData => ({
    //     url: '/UpdatePassword',
    //     method: 'POST',
    //     headers: 'content-type: application/json',
    //     body: userData,
    //   }),
    // }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useSetModeMutation,
  useCreateCompanyMutation,
} = Auth;
