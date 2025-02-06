import {combineReducers} from '@reduxjs/toolkit';
import authSlice from '../Reducers/AuthSlice';
import {Auth} from '../API/userAuth';

const AllReducer = combineReducers({
  Auth: authSlice,
  [Auth.reducerPath]: Auth.reducer,
});

export default AllReducer;
