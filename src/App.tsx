import React from "react";
import { RootState, useAppDispatch } from "./redux/store";
import { fetchItems, sortItems, sortSearch } from "./redux/slices/itemsSlice";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { useSelector } from "react-redux";
import { Profile } from "./pages/Profile/Profile";
import { MainLayout } from "./layouts/MainLayout";
import { filters } from "./redux/slices/filterSlice";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const category = useSelector(
    (state: RootState) => state.filters.category.value
  );
  const { selectedSort, searchValue } = useSelector(filters);

  const getItems = async () => {
    dispatch(fetchItems({ category }));
  };

  React.useEffect(() => {
    getItems();
  }, [category]);

  React.useEffect(() => {
    dispatch(sortItems(selectedSort));
    dispatch(sortSearch(searchValue));
  }, [selectedSort, searchValue, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/profile/:id" element={<Profile />} />
    </Routes>
  );
};
