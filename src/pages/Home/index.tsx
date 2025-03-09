import React from "react";
import styles from "./Home.module.scss";
import { useSelector } from "react-redux";
import { item, itemsData } from "../../redux/slices/itemsSlice";
import { ItemBlock } from "../../components/ItemBlock/ItemBlock";
import Skeleton from "../../components/ItemBlock/Skeleton";

interface itemsState {
  items: item[];
  status: string;
}

export const Home: React.FC = () => {
  const { items, status }: itemsState = useSelector(itemsData);

  const skeletons = [...new Array(10)].map((_, i) => <Skeleton key={i} />);
  const users = items.map((obj) => <ItemBlock {...obj} key={obj.id} />);

  return (
    <div className={styles.contentItems}>
      {status === "loading" ? skeletons : users}
    </div>
  );
};
