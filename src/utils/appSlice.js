import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    searchResultName: null,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    SearchByName: (state, action) => {
      state.searchResultName = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, SearchByName } = appSlice.actions;
export default appSlice.reducer;
