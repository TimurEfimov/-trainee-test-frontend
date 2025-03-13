import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    sortItems(state, action: PayloadAction<string>) {
      const sortType = action.payload;
      if (sortType === "alphabet") {
        state.items = state.items.slice().sort((a, b) => {
          const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
          const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
          return nameA.localeCompare(nameB);
        });
      } else if (sortType === "birthday") {
        state.items = state.items.slice().sort((a, b) => {
          const dateA = new Date(a.birthday);
          const dateB = new Date(b.birthday);
          return dateA.getTime() - dateB.getTime();
        });
      }
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

export const { setItems, sortItems } = itemsSlice.actions;

export default itemsSlice.reducer;
