import React from "react";
import styles from "./Profile.module.scss";
import arrow from "../../assets/arrow.svg";
import { Link, useParams } from "react-router";
import call from "../../assets/call.svg";
import star from "../../assets/star.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Profile: React.FC = () => {
  const { id } = useParams();
  const users = useSelector((state: RootState) => state.items.items);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <>
      <div className={styles.main}>
        <Link to="/">
          <img src={arrow} alt="" className={styles.arrow} />
        </Link>
        <div className={styles.content}>
          <img src={user.avatarUrl} alt="photo" />
          <div>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <span>{user.userTag}</span>
          </div>
          <p>{user.position}</p>
        </div>
      </div>
      <div className={styles.additional}>
        <div>
          <img src={star} alt="star" />
          <div className={styles.age}>
            <p>{user.birthday}</p>
          </div>
        </div>
        <div>
          <img src={call} alt="call" />
          <a href={`tel:${user.phone}`}>{user.phone}</a>
        </div>
      </div>
    </>
  );
};
