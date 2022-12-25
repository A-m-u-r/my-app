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

const appid = "1158870e77e030be2c0e3b069b4fff55";
const units = "metric";
const lang = "ru";
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast";
const getUrl = (townName: string) =>
  `${apiUrl}?appid=${appid}&units=${units}&q=${townName}&lang=${lang}`;

//const url = `https://api.openweathermap.org/data/2.5/forecast?appid=1158870e77e030be2c0e3b069b4fff55&units=metric&q=lyantor&lang=ru`;//

// функция в которую мы будем передавать пропс dateString(), и будем получать на выходе "2022-10-12"

const getDate = (dateString: string): string => {
  const date = new Date(dateString);
  return [date.getFullYear(), date.getMonth(), date.getDate()].join("-");
};

let arrDate: string[] = [];
const Week = () => {
  const [town, setTown] = useState<string>("Лянтор");
  const [weather, setWeather] = useState<IWeatherList>(weatherData);
  const fetchWeather = () => {
    fetch(getUrl(town))
      .then((response) => response.json())
      // обробатываем результат и записываем его при помощи "data" в weather !-- (usestate)
      .then((data) => setWeather(data))
      .catch((reason) => console.log(reason));
  };

 
  
  useEffect(fetchWeather, [town]);

  if (!weather.list) {
    return <></>;
  }
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
  let valDay = Object.values(dayWeathers);
  let dayOfWeek = keyDay.map((day) => day.slice(5));

  console.log(dayWeathers[keyDay[1]][4].weather[0].description);
  //dayWeather[1][4].weather.description
  return (
    <>
      <SearchTowns setTown={setTown} town={town} />
      <div className={styles.tableWeather}>
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

