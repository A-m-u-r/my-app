import { ITodayWeather } from "../../types/today";

export const todayWeather: ITodayWeather = {
  "coord": { "lon": 72.1555, "lat": 61.6195 },
  "weather": [
    {
      "id": 600,
      "main": "Snow",
      "description": "небольшой снег",
      "icon": "13n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": -0.62,
    "feels_like": -6.39,
    "temp_min": -0.62,
    "temp_max": -0.62,
    "pressure": 1014,
    "humidity": 98,
    "sea_level": 1014,
    "grnd_level": 1009
  },
  "visibility": 270,
  "wind": { "speed": 6.3, "deg": 213, "gust": 10.7 },
  "snow": { "1h": 0.24 },
  "clouds": { "all": 100 },
  "dt": 1671980763,
  "sys": { "country": "RU", "sunrise": 1671942711, "sunset": 1671961832 },
  "timezone": 18000,
  "id": 1541359,
  "name": "Лянтор",
  "cod": 200,
  list: undefined
}
