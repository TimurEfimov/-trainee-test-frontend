import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface item {
  avatarUrl: string;
  birthday: string;
  department: string;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  position: string;
  userTag: string;
}

interface itemsState {
  items: item[];
  status: Status;
}

interface paramsFilter {
  category: string;
}

export const fetchItems = createAsyncThunk(
  "items/fetchItemsStatus",
  async (params: paramsFilter) => {
    const { category } = params;
    const { data } = await axios({
      method: "get",
      url: `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${category}`,
      headers: { "Content-Type": "application/json" },
    });

    return data;
  }
);

const initialState: itemsState = {
  items: [],
  status: Status.LOADING,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchItems.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })

      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.status = Status.SUCCESS;
      })

      .addCase(fetchItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const itemsData = (state: RootState) => state.items;

export const {} = itemsSlice.actions;

export default itemsSlice.reducer;
