import React from "react";
import styles from "./Sort.module.scss";
import close from "../../assets/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen, setSelectedSort } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";

const list = [
  {
    title: "По алфавиту",
    filter: "alphabet",
  },
  {
    title: "По дню рождения",
    filter: "birthday",
  },
];

export const Sort: React.FC = () => {
  const dispatch = useDispatch();

  const selectedSort = useSelector(
    (state: RootState) => state.filters.selectedSort
  );

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedSort(event.target.value));
  };

  const closeFilters = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <div className={styles.drawer} />
      <div className={styles.filter}>
        <h1 className={styles.title}>Сортировка</h1>
        <img
          src={close}
          alt="close"
          className={styles.close}
          onClick={closeFilters}
        />
        {list.map((item, i) => (
          <div className={styles.radio} key={i}>
            <input
              type="radio"
              name="sort"
              id={item.filter}
              value={item.filter}
              checked={selectedSort === item.filter}
              onChange={handleSortChange}
            />
            <label htmlFor={item.filter}>{item.title}</label>
          </div>
        ))}
      </div>
    </>
  );
};
