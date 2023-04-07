import React from "react";
import { IPeriodWeather } from "../../types";
import styles from "./style.module.css";
import { WeatherImage } from "../Week/weatherImage";
import wind from "./../../IMGG/wind.png";

interface IDayProps {
  periodWeathers: IPeriodWeather;
}

const upperFirst = (text: string): string => {
  return text.slice(0, 1).toUpperCase() + text.slice(1);
};
export const Day: React.FC<IDayProps> = (props) => {
  let noDayTime: string = props.periodWeathers.dt_txt;
  let noDayTime2 = noDayTime.slice(11);
  let noDayTime3 = noDayTime2.slice(0, 5);

  let Temperature = props.periodWeathers.main.temp;
  let Temperature2 = Math.round(Temperature);

  return (
    <div>
      <div className={styles.temp}>{noDayTime3}</div>
      <WeatherImage image={props.periodWeathers.weather[0].description} />
      <div className={styles.temp}> {Temperature2} ℃</div>
      <div className={styles.windd}>
        <img src={wind} className={styles.windImg}></img> 
        {props.periodWeathers.wind.speed} м/с
      </div>
      <div className={styles.description}>
        {upperFirst(props.periodWeathers.weather[0].description)}
      </div>
    </div>
  );
  // <div> {JSON.stringify(props, null, 2)}</div>;
};
{
  /* <div>Дата {periodWeather.dt_txt}</div>
            <div>Температура {periodWeather.main.temp}</div>
            <div className={styles.clouds}>
              {periodWeather.weather[0].description}
            </div>
            <div className={styles.wind}>
              Скорость ветра {periodWeather.wind.speed} м/с
            </div> */
}
