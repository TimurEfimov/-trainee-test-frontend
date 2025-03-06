import React from "react";
import styles from "./Header.module.scss";
import { Input } from "../Input/Input";
import { Categories } from "../Categories/Categories";

export const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Поиск</h1>
      <Input />
      <Categories />
    </div>
  );
};
