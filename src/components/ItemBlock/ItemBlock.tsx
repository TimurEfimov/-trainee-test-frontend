import React from "react";
import styles from "./ItemBlock.module.scss";
import { item } from "../../redux/slices/itemsSlice";
import { Link } from "react-router";

export const ItemBlock: React.FC<item> = ({
  avatarUrl,
  firstName,
  lastName,
  userTag,
  position,
  id,
}) => {
  return (
    <Link to={`profile/${id}`}>
      <div className={styles.person}>
        <img src={avatarUrl} alt="photo" className={styles.img} />
        <div className={styles.info}>
          <div className={styles.title}>
            <h4>
              {firstName} {lastName}
            </h4>
            <span>{userTag}</span>
          </div>
          <p>{position}</p>
        </div>
      </div>
    </Link>
  );
};
