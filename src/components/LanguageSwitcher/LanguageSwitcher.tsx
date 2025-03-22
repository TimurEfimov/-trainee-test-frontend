import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./LanguageSwitcher.module.scss";

const list = [
  {
    title: "russia",
    value: "ru",
  },
  {
    title: "english",
    value: "en",
  },
];
export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language.split("-")[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.root}>
      {list.map((item) => (
        <img
          key={item.value}
          src={`/images/${item.title}.png`}
          alt={item.title}
          className={`${styles.icon} ${
            currentLanguage === item.value ? styles.active : ""
          }`}
          onClick={() => changeLanguage(item.value)}
        />
      ))}
    </div>
  );
};
