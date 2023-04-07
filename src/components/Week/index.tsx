import React, { useEffect, useState } from "react";
import { IPeriodWeather, IWeatherList } from "../../types";
import styles from "./style.module.css";
import { weather, weather as weatherData } from "./weather";
import { Tab } from "@headlessui/react";
import { Day } from "./../Day";
import { SearchTowns } from "../Search";
import { format, formatDistance, subDays } from "date-fns";
import { ru } from "date-fns/locale";
import { addDays, nextDay } from "date-fns/esm";
import { AddDay } from "./AddDay";
import { WeatherImage } from "./weatherImage";

interface IWeek {
  setTown: (townName: string) => void;
  town: string;
  dayWeathers:  Record<string, IPeriodWeather[]>; 
}

const Week:React.FC<IWeek> = (props) => {
  const{dayWeathers} = props;

  let keyDay = Object.keys(dayWeathers);
  let valDay = Object.values(dayWeathers);
  let dayOfWeek = keyDay.map((day) => day.slice(5));

  //console.log(dayWeathers[keyDay[1]][4].weather[0].description);
  return (
    <>
      <div className={styles.tableWeather}>
        <Tab.Group as="div">
          <Tab.List className={styles.list}>
            <Tab className={styles.btn}>
              <AddDay day={1} />
              <div className={styles.dayMonth}>
                {format(addDays(new Date(), 1), "dd LLL", { locale: ru }).slice(0,6)}
              </div>
              <WeatherImage image={dayWeathers[keyDay[1]][4].weather[0].description} /> 
              <div>Днём {Math.round(valDay[1][3].main.temp)}</div>
              <div>Ночью {Math.round(valDay[1][6].main.temp)}</div>
            </Tab>

            <Tab className={styles.btn}>
              <AddDay day={2} />
              <div className={styles.dayMonth}>
                {format(addDays(new Date(), 2), "dd LLL", { locale: ru }).slice(0,6)}
              </div>
              <WeatherImage image={dayWeathers[keyDay[2]][4].weather[0].description} />
              <div>Днём {Math.round(valDay[2][3].main.temp)}</div>
              <div>Ночью {Math.round(valDay[2][6].main.temp)}</div>
            </Tab>

            <Tab className={styles.btn}>
              <AddDay day={3} />
              <div className={styles.dayMonth}>
                {format(addDays(new Date(), 3), "dd LLL", { locale: ru }).slice(0,6)}
              </div>
              <WeatherImage image={dayWeathers[keyDay[3]][4].weather[0].description} />
              <div>Днём {Math.round(valDay[3][3].main.temp)} </div>
              <div>Ночью {Math.round(valDay[3][6].main.temp)}</div>
            </Tab>

            <Tab className={styles.btn}>
              <AddDay day={4} />
              <div className={styles.dayMonth}>
                {format(addDays(new Date(), 4), "dd LLL", { locale: ru }).slice(0,6)}
              </div>
              <WeatherImage image={dayWeathers[keyDay[4]][4].weather[0].description} />
              <div>Днём {Math.round(valDay[4][3].main.temp)} </div>
              <div>Ночью {Math.round(valDay[4][6].main.temp)}</div>
            </Tab>
          </Tab.List>

          <Tab.Panels className={styles.panels}>
            <Tab.Panel>
              <ul className={styles.week}>
                {dayWeathers[keyDay[1]].map(
                  (dayWeather: IPeriodWeather): any => (
                    <li key={dayWeather.dt_txt} className={styles.weekBlock}>
                      <Day periodWeathers={dayWeather} />
                    </li>
                  )
                )}
              </ul>
            </Tab.Panel>
            <Tab.Panel>
              <ul className={styles.week}>
                {dayWeathers[keyDay[2]].map(
                  (dayWeather: IPeriodWeather): any => (
                    <li key={dayWeather.dt_txt} className={styles.weekBlock}>
                      <Day periodWeathers={dayWeather} />
                    </li>
                  )
                )}
              </ul>
            </Tab.Panel>
            <Tab.Panel>
              <ul className={styles.week}>
                {dayWeathers[keyDay[3]].map(
                  (dayWeather: IPeriodWeather): any => (
                    <li key={dayWeather.dt_txt} className={styles.weekBlock}>
                      <Day periodWeathers={dayWeather} />
                    </li>
                  )
                )}
              </ul>
            </Tab.Panel>
            <Tab.Panel>
              <ul className={styles.week}>
                {dayWeathers[keyDay[4]].map(
                  (dayWeather: IPeriodWeather): any => (
                    <li key={dayWeather.dt_txt} className={styles.weekBlock}>
                      <Day periodWeathers={dayWeather} />
                    </li>
                  )
                )}
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>{" "}
    </>
  );
};
export default Week;

