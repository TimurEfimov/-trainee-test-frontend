import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  category: {
    title: string;
    value: string;
  };
}

const initialState: FilterState = {
  category: {
    title: "Все",
    value: "all",
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = filterSlice.actions;

export default filterSlice.reducer;
