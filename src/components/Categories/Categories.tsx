import React from "react";
import style from "./Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  filters,
  setCategory,
} from "../../redux/slices/filterSlice";

const list = [
  {
    title: "Все",
    value: "all",
  },
  {
    title: "Android",
    value: "android",
  },
  {
    title: "iOS",
    value: "ios",
  },
  {
    title: "Дизайн",
    value: "design",
  },
  {
    title: "Менеджмент",
    value: "management",
  },
  {
    title: "QA",
    value: "qa",
  },
  {
    title: "Бэк-офис",
    value: "back_office",
  },
  {
    title: "Frontend",
    value: "frontend",
  },
  {
    title: "HR",
    value: "hr",
  },
  {
    title: "PR",
    value: "pr",
  },
  {
    title: "Backend",
    value: "backend",
  },
  {
    title: "Техподдержка",
    value: "support",
  },
  {
    title: "Аналитика",
    value: "analytics",
  },
];

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const { category } = useSelector(filters);

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
