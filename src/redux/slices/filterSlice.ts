import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FilterState {
  category: {
    title: string;
    value: string;
  };
  isOpen: boolean;
  selectedSort: string;
  searchValue: string;
}

const initialState: FilterState = {
  category: {
    title: "Все",
    value: "all",
  },
  isOpen: false,
  selectedSort: "alphabet",
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    setSelectedSort(state, action) {
      state.selectedSort = action.payload;
    },
  },
});

export const filters = (state: RootState) => state.filters;

export const { setCategory, setIsOpen, setSelectedSort, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
