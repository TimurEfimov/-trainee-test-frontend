import React from "react";
import style from "./Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { filters, setCategory } from "../../redux/slices/filterSlice";
import { useTranslation } from "react-i18next";

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(filters);
  const { t } = useTranslation();

  const list = [
    { title: t("categories.all"), value: "all" },
    { title: t("categories.android"), value: "android" },
    { title: t("categories.ios"), value: "ios" },
    { title: t("categories.design"), value: "design" },
    { title: t("categories.management"), value: "management" },
    { title: t("categories.qa"), value: "qa" },
    { title: t("categories.back_office"), value: "back_office" },
    { title: t("categories.frontend"), value: "frontend" },
    { title: t("categories.hr"), value: "hr" },
    { title: t("categories.pr"), value: "pr" },
    { title: t("categories.backend"), value: "backend" },
    { title: t("categories.support"), value: "support" },
    { title: t("categories.analytics"), value: "analytics" },
  ];

  function setActiveIndex(value: string) {
    dispatch(setCategory(value));
  }

  return (
    <ul className={style.ul}>
      {list.map((item, i) => (
        <li
          className={category === item.value ? style.active : style.li}
          onClick={() => setActiveIndex(item.value)}
          key={i}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
