export const API_BASE_URL = 'https://kickz-back-end.vercel.app';
// export const API_BASE_URL = 'http://localhost:3000';
export const PRODUCTS_API_BASE_URL = 'https://dummyjson.com';
export const getAPiurl = endpoint => API_BASE_URL + endpoint;
export const Sign_UP = getAPiurl('/SignUp');
export const LOG_IN = getAPiurl('/LogIn');
export const FORGET_PASSWORD = getAPiurl('/ForgotPassword');
