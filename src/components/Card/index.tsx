import React from "react";
import styles from "./style.module.css";
import Timer from "./../Timer";

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <Timer />
      <h1 className={styles.h1} >weather.net</h1>
    </div>
  );
};
export default Card;
