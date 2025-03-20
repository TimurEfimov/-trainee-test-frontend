import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { Input } from "../Input/Input";
import { Categories } from "../Categories/Categories";
import { useSelector } from "react-redux";
import { itemsData } from "../../redux/slices/itemsSlice";

export const Header: React.FC = () => {
  const { status } = useSelector(itemsData);

  return (
    <>
      <div
        className={classNames(styles.root, {
          [styles.success]: status === "success",
          [styles.loading]: status === "loading",
          [styles.error]: status === "error",
        })}
      >
        <h1 className={styles.title}>Поиск</h1>
        {status === "success" ? (
          <>
            <Input />
          </>
        ) : status === "loading" ? (
          <>
            <h2 className={styles.desc}>Секундочку, гружусь...</h2>
          </>
        ) : status === "error" ? (
          <h2 className={styles.desc}>
            Не могу обновить данные. Проверь соединение с интернетом.
          </h2>
        ) : (
          ""
        )}
      </div>
      <Categories />
    </>
  );
};
