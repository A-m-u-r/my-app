import React from "react";
import { useState } from "react";
import styles from "./style.module.css";

const Timer = () => {
  // time - переменная Settime- фунцкия которая меняет переменную
  const [time, setTime] = useState(new Date());
  setInterval(() => setTime(new Date()), 1000);
  let tm: string = time.toLocaleString();
  let tme: string = "";
  for (let a of tm) {
    if (a == ",") {
      continue;
    }
    else tme += a
  };
  return <div className={styles.timer}> {tme}</div>;
};

export default Timer;
