import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  data: {},
};

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    IsLogin: (state, action) => {
      console.log('dsdsd', action);
      state.data = action.payload;
    },
    SignOut: (state, action) => {
      state.data = null;
    },
  },
});
export const {IsLogin, SignOut} = authSlice.actions;
export default authSlice.reducer;
