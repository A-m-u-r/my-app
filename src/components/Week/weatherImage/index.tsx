import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Tab } from "@headlessui/react";
import cloud from "./../../../IMGG/cloud.png";
import wind from "./../../../IMGG/wind.png";
import smallRain from "./../../../IMGG/smallRain.png";
import rain from "./../../../IMGG/rain.png";
import pareCloud from "./pareCloud.png";
import snow from "./../../../IMGG/snow.png";
import thunderstorm from "./../../../IMGG/thunderstorm.png";
import fog from "./../../../IMGG/fog.png";
import smallSnow from "./../../../IMGG/smallSnow.png";
import clear from "./../../../IMGG/clear.png";


interface IImage {
  image: string;
}

export const WeatherImage: React.FC<IImage> = (props) => {
  if (props.image === "пасмурно") {
    return <img src={cloud} className={styles.cloud}></img>;
  } else if (props.image === "небольшой дождь") {
    return <img src={smallRain} className={styles.cloud}></img>;
  } else if (props.image === "дождь") {
    return <img src={rain} className={styles.cloud}></img>;
  } else if (props.image === "снег") {
    return <img src={snow} className={styles.cloud}></img>;
  } else if (props.image === "гроза") {
    return <img src={thunderstorm} className={styles.cloud}></img>;
  } else if (props.image === "туман") {
    return <img src={fog} className={styles.cloud}></img>;
  } else if (props.image === "небольшой снег") {
    return <img src={smallSnow} className={styles.cloud}></img>;
  } else if (props.image === "ясно") {
    return <img src={clear} className={styles.cloud}></img>;
  } else if (props.image === "переменная облачность" || "облачно с прояснениями") {
    return <img src={pareCloud} className={styles.pareCloud}></img>;
  } else return <img src={wind} className={styles.wind}></img>;
};
// облачно с прояснениями Переменная облачность
