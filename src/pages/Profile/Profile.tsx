import React from "react";
import { useSelector } from "react-redux";
import { itemsData } from "../../redux/slices/itemsSlice";
import { Link, useParams } from "react-router-dom";
import arrow from "../../assets/arrow.svg";
import call from "../../assets/call.svg";
import star from "../../assets/star.svg";

import styles from "./Profile.module.scss";
import { useTranslation } from "react-i18next";

const calculateAge = (birthday: string) => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export const Profile: React.FC = () => {
  const { id } = useParams();
  const { status, items } = useSelector(itemsData);
  const { t } = useTranslation();

  const user = items.find((user) => user.id === id);

  const [year, month, day] = user?.birthday.split("-") || ["", "", ""];

  const monthName = t(`monthNames.${parseInt(month) - 1}`).toLowerCase();
  const formatedBirthday = `${day} ${monthName} ${year}`;
  const age = user?.birthday ? calculateAge(user.birthday) : null;

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
        <h1>{t("user.userNotFound")}</h1>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={styles.center}>
        <h1>{t("user.errorLoadingData")}</h1>
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
            <p>{formatedBirthday}</p>
            <span>
              {age} {t("user.yearsOld")}
            </span>
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
