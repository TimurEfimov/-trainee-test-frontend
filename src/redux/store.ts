import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import items from "./slices/itemsSlice";
import filters from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    items,
    filters,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
