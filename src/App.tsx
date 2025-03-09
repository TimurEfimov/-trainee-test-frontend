import React from "react";
import { Header } from "./components/Header/Header";
import { RootState, useAppDispatch } from "./redux/store";
import { fetchItems } from "./redux/slices/itemsSlice";
import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { useSelector } from "react-redux";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const category = useSelector(
    (state: RootState) => state.filters.category.value
  );

  const getItems = async () => {
    dispatch(fetchItems({ category }));
  };

  React.useEffect(() => {
    getItems();
  }, [category]);

  return (
    <>
      <div className="wrapper">
        <Header />
      </div>
      <hr className="line" />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};
