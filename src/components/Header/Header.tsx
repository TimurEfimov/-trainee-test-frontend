import React from "react";
import styles from "./Header.module.scss";
import classNames from "classnames";
import { Input } from "../Input/Input";
import { Categories } from "../Categories/Categories";
import { useSelector } from "react-redux";
import { itemsData } from "../../redux/slices/itemsSlice";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const { status } = useSelector(itemsData);
  const { t } = useTranslation();

  return (
    <>
      <div
        className={classNames(styles.root, {
          [styles.success]: status === "success",
          [styles.loading]: status === "loading",
          [styles.error]: status === "error",
        })}
      >
        <div className={styles.main}>
          <h1 className={styles.title}>{t("title")}</h1>
          <LanguageSwitcher />
        </div>
        {status === "success" ? (
          <>
            <Input />
          </>
        ) : status === "loading" ? (
          <>
            <h2 className={styles.desc}>{t("status.loading")}</h2>
          </>
        ) : status === "error" ? (
          <h2 className={styles.desc}>{t("status.error")}</h2>
        ) : (
          ""
        )}
      </div>
      <Categories />
    </>
  );
};
