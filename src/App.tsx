import React from "react";
import Account from "./components/Account";
import "./components/Card";
import Card from "./components/Card";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import { useState, useEffect } from "react";
import Week from "./components/Week";
import { IPeriodWeather, IWeatherList } from "./../src/types";
// что за weatherdata?? Получается мы берем weather из записываем эти значение в weatherdata?
import { weather, weather as weatherData } from "./components/Week/weather";
import {Today} from "./components/Today"

const appid = "1158870e77e030be2c0e3b069b4fff55";
const units = "metric";
const lang = "ru";
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast";
const getUrl = (townName: string) =>
  `${apiUrl}?appid=${appid}&units=${units}&q=${townName}&lang=${lang}`;

  const getDate = (dateString: string): string => {
    const date = new Date(dateString);
    return [date.getFullYear(), date.getMonth(), date.getDate()].join("-");
  };
  
  let arrDate: string[] = [];
  
function App() {
  const [town, setTown] = useState<string>("Лянтор");
  let [isOpen, setIsOpen] = useState(false);
  const [weather, setWeather] = useState<IWeatherList>(weatherData);
  const [todayWeather, setTodayWeather] = useState<IWeatherList>(weatherData);

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


  return (
    <div className="App">
      <Card setTown={setTown} town={town}/>
      <Account />
      <Today dayWeathers = {dayWeathers} todayWeather = {todayWeather} setTodayWeather={setTodayWeather} />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ backgroundColor: "grey" }}>Привет</div>
      </Modal>
      <Week setTown={setTown} town={town} dayWeathers = {dayWeathers}/>
      <button onClick={() => setIsOpen(true)}>Click!</button>
    </div>
  );
}

export default App;
