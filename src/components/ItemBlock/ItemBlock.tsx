import React from "react";
import styles from "./ItemBlock.module.scss";
import { item } from "../../redux/slices/itemsSlice";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

export const ItemBlock: React.FC<item> = ({
  avatarUrl,
  firstName,
  lastName,
  userTag,
  position,
  id,
}) => {
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setSearchValue(""));
  };

  return (
    <Link to={`profile/${id}`} onClick={handleSearch}>
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
