import React, { useState } from "react";
import styles from "./style.module.css";
import Timer from "./../Timer";
import { SearchTowns } from "../Search";



const Card: React.FC = (props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.h1}>weather.net</h1>
      {/* <SearchTowns setTown={setTown} town={town} /> */}
      <Timer />
      
    </div>
  );
};
export default Card;
