import React from "react";
import styles from "./NotFound.module.scss";
import loupe from "../../assets/loupe.png";

export const NotFound: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src={loupe} alt="" />
      <h2>Мы никого не нашли</h2>
      <p>Попробуй скорректировать запрос</p>
    </div>
  );
};
