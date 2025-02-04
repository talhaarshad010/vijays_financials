import {combineReducers} from 'redux';
import Auth from './AuthSlice';
import getReducer from './ProductsSlice';
import {ProductsManagement} from '../API/CallingProducts';
import ProductsSlice from './ProductsSlice';

const AllReducer = combineReducers({
  Auth,
  getReducer,
  // [ProductsManagement.reducerPath]: ProductsManagement.reducer,
  // getReducer,
});

export default AllReducer;
