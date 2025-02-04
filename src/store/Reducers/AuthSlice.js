import {createSlice} from '@reduxjs/toolkit';
import localStorage from 'redux-persist/es/storage';

const initialState = {
  isName: null,
  isEmail: null,
  isToken: null,
};
const Auth = createSlice({
  name: 'AB',
  initialState: initialState,
  reducers: {
    userLOGIN(state, payload) {
      state.isName = payload.payload.userName;
      state.isEmail = payload.payload.userEmail;
      state.isToken = payload.payload.isToken;
    },

    userLOGOUT(state) {
      state.isName = null;
      state.isEmail = null;
      state.isToken = null;
      localStorage.removeItem('authToken');
    },
  },
});
export const {userLOGIN, userLOGOUT} = Auth.actions;
export default Auth.reducer;
