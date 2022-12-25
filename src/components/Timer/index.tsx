import React from "react";
import { useState } from "react";
import styles from "./style.module.css";

const Timer = () => {
  const [time, setTime] = useState(new Date());
  setInterval(() => setTime(new Date()), 1000);
  let localeTime: string = time.toLocaleString();

  return (
    <>
      {" "}
      <div className={styles.timer}> {localeTime.replace(",", "")}</div>
    </>
  );
};

export default Timer;
