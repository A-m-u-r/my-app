import React from "react";
import { IPeriodWeather } from "../../types";
import styles from "./style.module.css"

interface IDayProps {
  periodWeathers: IPeriodWeather;
}
const upperFirst = (text:string): string => {
  return text.slice(0, 1).toUpperCase() + text.slice(1)
}
export const Day: React.FC<IDayProps> = (props) => {
  let noDayTime: string = props.periodWeathers.dt_txt
  let noDayTime2 = noDayTime.slice(11) 
  let noDayTime3 = noDayTime2.slice(0,5)

  let noTemp = props.periodWeathers.main.temp
  let noTemp2 = Math.round(noTemp)

  return (
    <div>
      <div className={styles.temp} >{noDayTime3}</div>
      <div className={styles.temp}> {noTemp2} ℃</div>
      <div>Скорость ветра {props.periodWeathers.wind.speed} м/с</div>
      <div className={styles.temp}>{upperFirst(props.periodWeathers.weather[0].description)}</div>
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
