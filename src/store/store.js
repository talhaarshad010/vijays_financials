import {configureStore} from '@reduxjs/toolkit';
import AllReducer from './Reducers';
import {ProductsManagement} from './Reducers/CallingProducts';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    AllReducer,
    [ProductsManagement.reducerPath]: ProductsManagement.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(ProductsManagement.middleware),
});
setupListeners(store.dispatch);
