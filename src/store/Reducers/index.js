import {combineReducers} from 'redux';
import Auth from './AuthSlice';

const AllReducer = combineReducers({
  Auth,
});

export default AllReducer;
