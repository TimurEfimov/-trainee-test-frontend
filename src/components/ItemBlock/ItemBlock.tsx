import React from "react";
import styles from "./ItemBlock.module.scss";
import { item } from "../../redux/slices/itemsSlice";
import { Link } from "react-router";
import { Avatar } from "./Avatar";

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
        <Avatar src={avatarUrl} alt="logo" name={firstName} size={72} />
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
