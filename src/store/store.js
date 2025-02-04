import {configureStore} from '@reduxjs/toolkit';
import AllReducer from './Reducers';
import {ProductsManagement} from './API/CallingProducts';
import {setupListeners} from '@reduxjs/toolkit/query';
import {Products} from './Reducers/productsData';

export const store = configureStore({
  reducer: {
    AllReducer,
    [ProductsManagement.reducerPath]: ProductsManagement.reducer,
    [Products.reducerPath]: Products.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      ProductsManagement.middleware,
      Products.middleware,
    ),
});
setupListeners(store.dispatch);
