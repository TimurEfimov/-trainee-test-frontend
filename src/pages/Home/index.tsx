import React from "react";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import { item, itemsData } from "../../redux/slices/itemsSlice";
import { ItemBlock } from "../../components/ItemBlock/ItemBlock";
import Skeleton from "../../components/ItemBlock/Skeleton";
import { Sort } from "../../components/Sort/Sort";
import { NotFound } from "../../components/NotFound/NotFound";
import { filters } from "../../redux/slices/filterSlice";

interface itemsState {
  items: item[];
  status: string;
  filteredItems: item[];
}

export const Home: React.FC = () => {
  const { filteredItems, status }: itemsState = useSelector(itemsData);
  const { searchValue, isOpen } = useSelector(filters);

  const skeletons = [...new Array(10)].map((_, i) => <Skeleton key={i} />);
  const users = filteredItems.map((obj) => <ItemBlock {...obj} key={obj.id} />);

  const isSearchEmpty = searchValue && filteredItems.length === 0;

  return (
    <>
      {isOpen && <Sort />}

      {isSearchEmpty ? (
        <NotFound />
      ) : (
        <div className={styles.contentItems}>
          {status === "loading" ? skeletons : users}
        </div>
      )}
    </>
  );
};
