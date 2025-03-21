import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchWithCache } from "../slices/apiCache";

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
  filteredItems: item[];
  status: Status;
}

interface paramsFilter {
  category: string;
}

export const fetchItems = createAsyncThunk(
  "items/fetchItemsStatus",
  async (params: paramsFilter) => {
    const { category } = params;
    const data = await fetchWithCache(
      `https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${category}`,
      {}
    );

    return data;
  }
);

const initialState: itemsState = {
  items: [],
  filteredItems: [],
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
        state.filteredItems = state.items.slice().sort((a, b) => {
          const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
          const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
          return nameA.localeCompare(nameB);
        });
      } else if (sortType === "birthday") {
        const today = new Date();
        const currentYear = today.getFullYear();

        state.filteredItems = state.items.slice().sort((a, b) => {
          const dateA = new Date(a.birthday);
          const dateB = new Date(b.birthday);

          dateA.setFullYear(currentYear);
          dateB.setFullYear(currentYear);

          if (dateA < today) dateA.setFullYear(currentYear + 1);
          if (dateB < today) dateB.setFullYear(currentYear + 1);

          return dateA.getTime() - dateB.getTime();
        });
      }
    },
    sortSearch(state, action: PayloadAction<string>) {
      const search = action.payload.toLowerCase().trim();
      if (!search) return;
      state.filteredItems = state.filteredItems.filter((item) =>
        (item.firstName + " " + item.lastName + " " + item.userTag)
          .toLowerCase()
          .includes(search)
      );
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchItems.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
        state.filteredItems = [];
      })

      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.filteredItems = action.payload.items;

        state.status = Status.SUCCESS;

        state.filteredItems = state.items.slice().sort((a, b) => {
          const nameA = `${a.firstName} ${a.lastName}`.toUpperCase();
          const nameB = `${b.firstName} ${b.lastName}`.toUpperCase();
          return nameA.localeCompare(nameB);
        });
      })

      .addCase(fetchItems.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
        state.filteredItems = [];
      });
  },
});

export const itemsData = (state: RootState) => state.items;

export const { setItems, sortItems, sortSearch } = itemsSlice.actions;

export default itemsSlice.reducer;
