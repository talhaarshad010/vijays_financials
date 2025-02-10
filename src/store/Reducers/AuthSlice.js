import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  email: null,
  name: null,
  mode: null,
  companies: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('User Logged In:', action.payload);
      const {token, email, name, mode, companies} = action.payload;
      state.token = token;
      state.email = email;
      state.name = name;
      state.mode = mode || '';
      state.companies = companies;
    },
    updateMode: (state, action) => {
      console.log('Mode Updated:', action.payload);
      state.mode = action.payload;
    },
    logout: state => {
      console.log('User Logged Out');
      return initialState;
    },
  },
});

export const {login, updateMode, logout} = authSlice.actions;
export default authSlice.reducer;
