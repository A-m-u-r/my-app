import React, { useEffect, useState } from "react";
import { IPeriodWeather, IWeatherList } from "../../types";
import styles from "./style.module.css";
import { weather, weather as weatherData } from "./weather";
import { Tab } from "@headlessui/react";
import { Day } from "./../Day";
import { stringify } from "querystring";

const appid = "1158870e77e030be2c0e3b069b4fff55";
const units = "metric";
const lang = "ru";
const townName = "lyantor";
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast";
const url = `${apiUrl}?appid=${appid}&units=${units}&q=${townName}&lang=${lang}`;

//const url = `http://api.openweathermap.org/data/2.5/forecast?appid=1158870e77e030be2c0e3b069b4fff55&units=metric&q=lyantor&lang=ru`;//

// функция в которую мы будем передавать пропс dateString(), и будем получать на выходе "2022-10-12"
const getDate = (dateString: string): string => {
  const date = new Date(dateString);
  return [date.getFullYear(), date.getMonth(), date.getDate()].join("-");
  const dayKey: any = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ].join("-");
};

let arrDate: string[] = [];
const Week = () => {
  const [weather, setWeather] = useState<IWeatherList>(weatherData);
  const fetchWeather = () => {
    fetch(url)
      .then((response) => response.json())
      // обробатываем результат и записываем его при помощи "data" в weather !-- (usestate)
      .then((data) => setWeather(data));
  };
  // dayWeather - отсортированный по дате список промежутков погоды на день
  let dayWeathers: Record<string, IPeriodWeather[]> = {};
  weather.list.forEach((periodWeather) => {
    let currentDate = getDate(periodWeather.dt_txt);
    arrDate.push(currentDate);
    //console.log(periodWeather.dt_txt)
    if (!dayWeathers[currentDate]) {
      dayWeathers[currentDate] = [];
    }
    // currentDate является ключом к periodWeather
    dayWeathers[currentDate] = [...dayWeathers[currentDate], periodWeather];
  });
  let keyDay = Object.keys(dayWeathers);
  //
  let valDay = Object.values(dayWeathers);
  // отсортировать valday по времени
  // let a: number = 0;
  // for( a=0, 3 > arrDate.length, ++a) { }
  // const arrD = () => {

  // }

  //console.log(arr)
  /*  let dayWeathers: Record<string, IPeriodWeather[]> = {};
  weather.list.forEach((periodWeather) => {
    let currentDate = getDate(periodWeather.dt_txt);
   
    // currentDate является ключом к periodWeather
    dayWeathers[currentDate] = [...(dayWeathers[currentDate]?? []) , periodWeather];
    console.log(currentDate);
    */

 //useEffect(fetchWeather, []);
  return (
    <div>
      {/* <ul className={styles.week}>
        <pre>{JSON.stringify(dayWeathers, null, 2)}</pre> 
        {weather.list.map((periodWeather: IPeriodWeather) => (
          <li key={periodWeather.dt_txt} className={styles.weekBlock}>
            <div>Дата {periodWeather.dt_txt}</div>
            <div>Температура {periodWeather.main.temp}</div>
            <div className={styles.clouds}>
              {periodWeather.weather[0].description}
            </div>
            <div className={styles.wind}>
              Скорость ветра {periodWeather.wind.speed} м/с
            </div>
          </li>
        ))}
      </ul> */}

      <Tab.Group>
        <Tab.List>
          {/* <Tab>{valDay[0][valDay[0].length-2].main.temp} {valDay[0][0].main.temp}</Tab> */}
          <Tab>
            Завтра {valDay[1][3].main.temp} {valDay[1][6].main.temp}
          </Tab>
          <Tab>
            Послезавтра {valDay[2][3].main.temp} {valDay[2][6].main.temp}
          </Tab>
          <Tab>
            //dt_txt этого дня {valDay[3][3].main.temp} {valDay[3][6].main.temp}
          </Tab>
          <Tab>
            Tab 5 {valDay[4][3].main.temp} {valDay[4][6].main.temp}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          {/* //пройтись по массиву и назначить кажждому элементу dayweather,
                отобразить результат функционального компонента Day передав ему
                в качестве пропса dayWeather */}
          {/* <Tab.Panel>
            {dayWeathers[keyDay[0]].map((dayWeather: IPeriodWeather): any => (
              <Day periodWeathers={dayWeather} />
            ))}
          </Tab.Panel> */}
          <Tab.Panel>
            <ul className={styles.week}>
              {" "}
              {dayWeathers[keyDay[1]].map((dayWeather: IPeriodWeather): any => (
                <li className={styles.weekBlock}>
                  {" "}
                  <Day periodWeathers={dayWeather} />
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <ul className={styles.week}>
              {" "}
              {dayWeathers[keyDay[2]].map((dayWeather: IPeriodWeather): any => (
                <li className={styles.weekBlock}>
                  {" "}
                  <Day periodWeathers={dayWeather} />
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <ul className={styles.week}>
              {" "}
              {dayWeathers[keyDay[3]].map((dayWeather: IPeriodWeather): any => (
                <li className={styles.weekBlock}>
                  {" "}
                  <Day periodWeathers={dayWeather} />
                </li>
              ))}
            </ul>
          </Tab.Panel>
          <Tab.Panel>
            <ul className={styles.week}>
              {" "}
              {dayWeathers[keyDay[4]].map((dayWeather: IPeriodWeather): any => (
                <li className={styles.weekBlock}>
                  {" "}
                  <Day periodWeathers={dayWeather} />
                </li>
              ))}
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Week;
