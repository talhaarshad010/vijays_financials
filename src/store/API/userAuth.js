import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';
import {API_BASE_URL} from '../../assets/config/urls';
import {store} from '../store';

export const Auth = createApi({
  reducerPath: 'Authentication',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,

    prepareHeaders: headers => {
      const token = store?.getState().Auth?.token;
      console.log('Token Dtaa', token);
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      console.log('Header', token);
      return headers;
    },
  }),

  endpoints: builder => ({
    SignUp: builder.mutation({
      query: userData => ({
        url: '/user/userSignup',
        method: 'POST',
        body: userData,
      }),
    }),

    SignIn: builder.mutation({
      query: userData => ({
        url: '/user/userSignin',
        method: 'POST',
        body: userData,
      }),
    }),

    SetMode: builder.mutation({
      query: userData => ({
        url: '/user/setMode',
        method: 'POST',
        body: userData,
      }),
    }),
    CreateCompany: builder.mutation({
      query: userData => ({
        url: '/user/createCompany',
        method: 'POST',
        body: userData,
      }),
    }),
    GetCompanies: builder.mutation({
      query: () => ({
        url: '/user/getCompanies',
        method: 'GET',
      }),
    }),
    ForgetPassword: builder.mutation({
      query: userData => ({
        url: '/user/ForgotPassword',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useSetModeMutation,
  useCreateCompanyMutation,
  useGetCompaniesMutation,
  useForgetPasswordMutation,
} = Auth;
