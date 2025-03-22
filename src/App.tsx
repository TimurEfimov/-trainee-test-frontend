import React from "react";
import { RootState, useAppDispatch } from "./redux/store";
import { fetchItems, sortItems, sortSearch } from "./redux/slices/itemsSlice";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { useSelector } from "react-redux";
import { Profile } from "./pages/Profile/Profile";
import { MainLayout } from "./layouts/MainLayout";
import {
  filters,
  setParamCategory,
  newParamsCategory,
  setSearchValue,
  setSelectedSort,
} from "./redux/slices/filterSlice";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedSort, searchValue, paramsCategory, category } =
    useSelector(filters);
  const theme = useSelector((state: RootState) => state.theme.theme);

  const getItems = async () => {
    await dispatch(fetchItems({ category }));
    const foundParams = paramsCategory.find((item) => item.value === category);
    if (foundParams) {
      dispatch(setSelectedSort(foundParams.sort));
      dispatch(setSearchValue(foundParams.searchValue));
    } else {
      dispatch(
        newParamsCategory({
          value: category,
          searchValue: "",
          sort: "alphabet",
        })
      );
      dispatch(setSelectedSort("alphabet"));
      dispatch(setSearchValue(""));
    }
  };

  React.useEffect(() => {
    getItems();
  }, [category]);

  React.useEffect(() => {
    dispatch(sortItems(selectedSort));
    dispatch(sortSearch(searchValue));
    const foundParams = paramsCategory.find((item) => item.value === category);

    if (foundParams) {
      dispatch(
        setParamCategory({
          value: foundParams.value,
          sort: selectedSort,
          searchValue,
        })
      );
    }
  }, [selectedSort, searchValue]);

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};
