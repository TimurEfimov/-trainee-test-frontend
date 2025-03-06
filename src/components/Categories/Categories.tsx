import React from "react";
import style from "./Categories.module.scss";

const list = [
  {
    title: "Все",
  },
  {
    title: "Designers",
  },
  {
    title: "Analysts",
  },
  {
    title: "Managers",
  },
  {
    title: "iOS",
  },
  {
    title: "Android",
  },
];

export const Categories: React.FC = () => {
  const [active, setActive] = React.useState(0);

  function setActiveIndex(i: number) {
    setActive(i);
  }

  return (
    <ul className={style.ul}>
      {list.map((item, i) => (
        <li
          className={active === i ? style.active : style.li}
          onClick={() => setActiveIndex(i)}
          key={i}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
