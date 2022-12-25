import React, { useState } from "react";
import styles from "./style.module.css";
import Timer from "./../Timer";
import { SearchTowns } from "../Search";

interface ICard {
  setTown: (townName: string) => void;
  town: string;
}

const Card: React.FC<ICard> = (props) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.h1}>weather.net</h1>
      <div className={styles.searchAndTimer}>
      <div className={styles.SearchTowns}>
      <SearchTowns setTown={props.setTown} town={props.town}/>
      </div>
      <Timer/>
      </div>
    </div>
  );
};
export default Card;
