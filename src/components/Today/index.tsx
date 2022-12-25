import React from "react";
import styles from "./style.module.css";
import { IPeriodWeather } from "../../types";
import { WeatherImage } from "../Week/weatherImage";
import wind from "./../../IMGG/wind.png";

interface IToday {
    dayWeathers: Record<string, IPeriodWeather[]>;
    todayWeather: any;
    setTodayWeather: any;
};
const upperFirst = (text: string): string => {
    return text.slice(0, 1).toUpperCase() + text.slice(1);}

export const Today:React.FC<IToday> = (props) => {
    const {dayWeathers} = props;
   
  
    let keyDay = Object.keys(dayWeathers);
    let valDay = Object.values(dayWeathers);
    let dayOfWeek = keyDay.map((day) => day.slice(5));

    return <div className = {styles.today}>  {dayWeathers[keyDay[0]].map(
        (dayWeather: IPeriodWeather): any => (
            <div className={styles.periodWeather}>
            <div key={dayWeather.dt_txt}>
            <div className={styles.temp}>{dayWeather.dt_txt.slice(11).slice(0,5)}</div>
            <WeatherImage image={dayWeather.weather[0].description} />
            <div className={styles.temp}> {Math.round(dayWeather.main.temp)} ℃</div>
            <div className={styles.windd}>
              <img src={wind} className={styles.windImg}></img> 
              {dayWeather.wind.speed} м/с
            </div>
            <div className={styles.description}>
              {upperFirst(dayWeather.weather[0].description)}
              </div>
            </div>
            </div>
        )
      )}</div>
}

      
//         <div>
//       <div className={styles.temp}>{noDayTime3}</div>
//       <WeatherImage image={dayWeather.weather[0].description} />
//       <div className={styles.temp}> {noTemp2} ℃</div>
//       <div className={styles.windd}>
//         <img src={wind} className={styles.windImg}></img> 
//         {dayWeather.wind.speed} м/с
//       </div>
//       <div className={styles.description}>
//         {upperFirst(dayWeather.weather[0].description)}
//       </div>
//     </div>
        
//     )
// }