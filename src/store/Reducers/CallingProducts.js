import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../assets/config/urls';

export const ProductsManagement = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({baseUrl: API_BASE_URL}),
  endpoints: builder => ({
    Login: builder.mutation({
      query: userData => ({
        url: '/UserLogin',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),

    Signup: builder.mutation({
      query: userData => ({
        url: '/UserSignup',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),

    ForgetPassword: builder.mutation({
      query: userData => ({
        url: '/ForgotPassword',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),
    VerifyOtp: builder.mutation({
      query: userData => ({
        url: '/VerifyOtp',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),
    ConfirmPassword: builder.mutation({
      query: userData => ({
        url: '/UpdatePassword',
        method: 'POST',
        headers: 'content-type: application/json',
        body: userData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useForgetPasswordMutation,
  useVerifyOtpMutation,
  useConfirmPasswordMutation,
} = ProductsManagement;
