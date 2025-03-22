import React from "react";
import styles from "./Sort.module.scss";
import close from "../../assets/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen, setSelectedSort } from "../../redux/slices/filterSlice";
import { RootState } from "../../redux/store";
import { useTranslation } from "react-i18next";

export const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const list = [
    {
      title: t("sort.alphabet"),
      filter: "alphabet",
    },
    {
      title: t("sort.birthday"),
      filter: "birthday",
    },
  ];

  const selectedSort = useSelector(
    (state: RootState) => state.filters.selectedSort
  );

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedSort(event.target.value));
    dispatch(setIsOpen(false));
  };

  const closeFilters = () => {
    dispatch(setIsOpen(false));
  };

  return (
    <>
      <div className={styles.drawer} />
      <div className={styles.filter}>
        <h1 className={styles.title}>{t("sort.title")}</h1>
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
