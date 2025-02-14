// import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   currentTheme: 'light', // Default theme is light
// };

// const themeSlice = createSlice({
//   name: 'theme',
//   initialState,
//   reducers: {
//     toggleTheme: state => {
//       state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
//     },
//   },
// });

// export const {toggleTheme} = themeSlice.actions;
// export default themeSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentTheme: 'system',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;
