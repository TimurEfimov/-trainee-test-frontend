import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FilterState {
  category: string;
  isOpen: boolean;
  selectedSort: string;
  searchValue: string;
  paramsCategory: {
    searchValue: string;
    sort: string;
    value: string;
  }[];
}

const initialState: FilterState = {
  category: "all",
  isOpen: false,
  selectedSort: "alphabet",
  searchValue: "",
  paramsCategory: [],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    newParamsCategory(state, action) {
      state.paramsCategory = [...state.paramsCategory, action.payload];
    },
    setParamCategory(state, action) {
      const index = state.paramsCategory.findIndex(
        (item) => item.value === action.payload.value
      );
      if (index !== -1) {
        state.paramsCategory[index] = {
          ...state.paramsCategory[index],
          sort: action.payload.sort,
          searchValue: action.payload.searchValue,
        };
      }
    },
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

export const {
  setCategory,
  setIsOpen,
  setSelectedSort,
  setSearchValue,
  newParamsCategory,
  setParamCategory,
} = filterSlice.actions;

export default filterSlice.reducer;
