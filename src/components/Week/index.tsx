import React, { useEffect, useState } from "react";
import { IPeriodWeather, IWeatherList } from "../../types";
import styles from "./style.module.css";
import { weather, weather as weatherData } from "./weather";

const appid = "1158870e77e030be2c0e3b069b4fff55";
const units = "metric";
const lang = "ru";
const townName = "lyantor";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast";
const url = `${apiUrl}?appid=${appid}&units=${units}&q=${townName}&lang=${lang}`;


// const url = `https://api.openweathermap.org/data/2.5/forecast?appid=1158870e77e030be2c0e3b069b4fff55&units=metric&q=lyantor&lang=ru`;//

//  {
//       dt: 1665295200,
//       main: n: {
//      temp: 8.68,
//         feels_like: 6.22,
//         temp_min: 8.68,
//         temp_max: 8.68,
//         pressureure: 1012,
////       sea_level: 1012,
//         grnd_level: 1007,
//         humidity: 69,
//         temp_kf: 0,
//       },
//       weather: [
//         { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
//       ],
//       c  clouds: { all: 79 },
//     wind: { speed: 4.34, deg: 280, gust: 5.31 },
//       visibility: 10000,

//     pop: 0,
//       sys: { pod: "d" },

//  dt_txt: "2022-10-09 06:00:00",
//     },
// функция в которую мы будем передавать пропс dateString(), и будем получать на выходе "2022-10-12"
const getDate = (dateString: string): string => {
  const date = new Date(dateString);
  return [date.getFullYear(), date.getMonth(), date.getDate()].join("-");
};

const Week = () => {
  const [weather, setWeather] = useState<IWeatherList>(weatherData);
  const fetchWeather = () => {
    fetch(url)
      .then((response) => response.json())
      // обробатываем результат и записываем его при помощи "data" в weather !-- (usestate)
      .then((data) => setWeather(data));
  };
  // список промежутков погоды на день
  let dayWeathers: Record<string, IPeriodWeather[]> = {};
  weather.list.forEach((dailyWeather) => {
    let currentDate = getDate(dailyWeather.dt_txt);
    //console.log(dailyWeather.dt_txt)
    if (!dayWeathers[currentDate]) {
      dayWeathers[currentDate] = [];
    }
    // currentDate является ключом к dailyWeather
    dayWeathers[currentDate] = [...dayWeathers[currentDate], dailyWeather];
    console.log(currentDate);
  });
  //useEffect(fetchWeather, []);
  return (
    <ul className={styles.week}>
      <pre>{JSON.stringify(dayWeathers, null, 2)}</pre>
      {weather.list.map((dailyWeather: IPeriodWeather) => (
        <li key={dailyWeather.dt_txt} className={styles.weekBlock}>
          <div>Дата {dailyWeather.dt_txt}</div>
          <div>Температура {dailyWeather.main.temp}</div>
          <div className={styles.clouds}>
            {dailyWeather.weather[0].description}
          </div>
          <div className={styles.wind}>
            Скорость ветра {dailyWeather.wind.speed}
            м/с
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Week;
