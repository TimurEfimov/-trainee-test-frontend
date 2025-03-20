import React from "react";
import { useSelector } from "react-redux";
import { itemsData } from "../../redux/slices/itemsSlice";
import { Link, useParams } from "react-router";
import arrow from "../../assets/arrow.svg";
import call from "../../assets/call.svg";
import star from "../../assets/star.svg";

import styles from "./Profile.module.scss";

export const Profile: React.FC = () => {
  const { id } = useParams();
  const { status, items } = useSelector(itemsData);

  const user = items.find((user) => user.id === id);

  if (status === "loading") {
    return (
      <div className={styles.center}>
        <div className={styles.lds_dual_ring}></div>
      </div>
    );
  }

  if (!user && status === "success") {
    return (
      <div className={styles.center}>
        <h1>User is not found</h1>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={styles.center}>
        <h1>Error loading user data</h1>
      </div>
    );
  }

  return (
    <>
      <div className={styles.main}>
        <Link to="/">
          <img src={arrow} alt="" className={styles.arrow} />
        </Link>
        <div className={styles.content}>
          <img src={user?.avatarUrl} alt="photo" />
          <div>
            <h1>
              {user?.firstName} {user?.lastName}
            </h1>
            <span>{user?.userTag}</span>
          </div>
          <p>{user?.position}</p>
        </div>
      </div>
      <div className={styles.additional}>
        <div>
          <img src={star} alt="star" />
          <div className={styles.age}>
            <p>{user?.birthday}</p>
          </div>
        </div>
        <div>
          <img src={call} alt="call" />
          <a href={`tel:${user?.phone}`}>{user?.phone}</a>
        </div>
      </div>
    </>
  );
};
