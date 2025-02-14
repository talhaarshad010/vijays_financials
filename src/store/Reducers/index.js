import {combineReducers} from '@reduxjs/toolkit';
import authSlice from '../Reducers/AuthSlice';
import {Auth} from '../API/userAuth';
import themeSlice from '../Reducers/appTheme';
const AllReducer = combineReducers({
  Auth: authSlice,
  [Auth.reducerPath]: Auth.reducer,
  Theme: themeSlice,
});

export default AllReducer;
