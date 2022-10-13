import { IWeatherList } from "../../types";

export const weather: IWeatherList = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1665306000,
      main: {
        temp: 9.07,
        feels_like: 6.52,
        temp_min: 9.07,
        temp_max: 9.92,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
        humidity: 67,
        temp_kf: -0.85,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04d",
        },
      ],
      clouds: { all: 56 },
      wind: { speed: 4.76, deg: 262, gust: 5.41 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-09 09:00:00",
    },
    {
      dt: 1665316800,
      main: {
        temp: 7.97,
        feels_like: 5.37,
        temp_min: 7.63,
        temp_max: 7.97,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
        humidity: 72,
        temp_kf: 0.34,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03d",
        },
      ],
      clouds: { all: 37 },
      wind: { speed: 4.29, deg: 241, gust: 6.56 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-09 12:00:00",
    },
    {
      dt: 1665327600,
      main: {
        temp: 5.89,
        feels_like: 2.52,
        temp_min: 5.89,
        temp_max: 5.89,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04n",
        },
      ],
      clouds: { all: 63 },
      wind: { speed: 4.85, deg: 225, gust: 9.83 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-09 15:00:00",
    },
    {
      dt: 1665338400,
      main: {
        temp: 7.01,
        feels_like: 3.52,
        temp_min: 7.01,
        temp_max: 7.01,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04n",
        },
      ],
      clouds: { all: 81 },
      wind: { speed: 5.8, deg: 234, gust: 10.55 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-09 18:00:00",
    },
    {
      dt: 1665349200,
      main: {
        temp: 5.98,
        feels_like: 2.58,
        temp_min: 5.98,
        temp_max: 5.98,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 4.97, deg: 232, gust: 8.54 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-09 21:00:00",
    },
    {
      dt: 1665360000,
      main: {
        temp: 6.4,
        feels_like: 2.8,
        temp_min: 6.4,
        temp_max: 6.4,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 5.67, deg: 226, gust: 9.44 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-10 00:00:00",
    },
    {
      dt: 1665370800,
      main: {
        temp: 6.64,
        feels_like: 2.87,
        temp_min: 6.64,
        temp_max: 6.64,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1004,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 6.3, deg: 228, gust: 10.65 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-10 03:00:00",
    },
    {
      dt: 1665381600,
      main: {
        temp: 7.51,
        feels_like: 3.61,
        temp_min: 7.51,
        temp_max: 7.51,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1003,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "небольшой дождь", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.4, deg: 223, gust: 11.73 },
      visibility: 10000,
      pop: 0.24,
      rain: { "3h": 0.55 },
      sys: { pod: "d" },
      dt_txt: "2022-10-10 06:00:00",
    },
    {
      dt: 1665392400,
      main: {
        temp: 7.31,
        feels_like: 2.92,
        temp_min: 7.31,
        temp_max: 7.31,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "небольшой дождь", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 8.94, deg: 239, gust: 14.88 },
      visibility: 10000,
      pop: 0.9,
      rain: { "3h": 2.05 },
      sys: { pod: "d" },
      dt_txt: "2022-10-10 09:00:00",
    },
    {
      dt: 1665403200,
      main: {
        temp: 8.36,
        feels_like: 4.23,
        temp_min: 8.36,
        temp_max: 8.36,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1002,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "небольшой дождь", icon: "10d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 9.18, deg: 258, gust: 15.14 },
      visibility: 10000,
      pop: 0.9,
      rain: { "3h": 0.21 },
      sys: { pod: "d" },
      dt_txt: "2022-10-10 12:00:00",
    },
    {
      dt: 1665414000,
      main: {
        temp: 8.17,
        feels_like: 4.43,
        temp_min: 8.17,
        temp_max: 8.17,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1003,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04n" },
      ],
      clouds: { all: 100 },
      wind: { speed: 7.53, deg: 272, gust: 13.15 },
      visibility: 10000,
      pop: 0.05,
      sys: { pod: "n" },
      dt_txt: "2022-10-10 15:00:00",
    },
    {
      dt: 1665424800,
      main: {
        temp: 6.28,
        feels_like: 2.52,
        temp_min: 6.28,
        temp_max: 6.28,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1004,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04n" },
      ],
      clouds: { all: 87 },
      wind: { speed: 6, deg: 271, gust: 10.94 },
      visibility: 10000,
      pop: 0.01,
      sys: { pod: "n" },
      dt_txt: "2022-10-10 18:00:00",
    },
    {
      dt: 1665435600,
      main: {
        temp: 4.74,
        feels_like: 1.17,
        temp_min: 4.74,
        temp_max: 4.74,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1005,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03n",
        },
      ],
      clouds: { all: 28 },
      wind: { speed: 4.68, deg: 272, gust: 8.81 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-10 21:00:00",
    },
    {
      dt: 1665446400,
      main: {
        temp: 3.62,
        feels_like: -0.6,
        temp_min: 3.62,
        temp_max: 3.62,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1006,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "небольшая облачность",
          icon: "02n",
        },
      ],
      clouds: { all: 24 },
      wind: { speed: 5.43, deg: 272, gust: 9.96 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-11 00:00:00",
    },
    {
      dt: 1665457200,
      main: {
        temp: 3.24,
        feels_like: -1.39,
        temp_min: 3.24,
        temp_max: 3.24,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1006,
        humidity: 88,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03d",
        },
      ],
      clouds: { all: 43 },
      wind: { speed: 6.11, deg: 269, gust: 10.67 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-11 03:00:00",
    },
    {
      dt: 1665468000,
      main: {
        temp: 5.69,
        feels_like: 1.13,
        temp_min: 5.69,
        temp_max: 5.69,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1007,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04d",
        },
      ],
      clouds: { all: 71 },
      wind: { speed: 7.82, deg: 276, gust: 10.29 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-11 06:00:00",
    },
    {
      dt: 1665478800,
      main: {
        temp: 5.75,
        feels_like: 1.08,
        temp_min: 5.75,
        temp_max: 5.75,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1008,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04d" },
      ],
      clouds: { all: 100 },
      wind: { speed: 8.23, deg: 279, gust: 10.8 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-11 09:00:00",
    },
    {
      dt: 1665489600,
      main: {
        temp: 5.51,
        feels_like: 1.05,
        temp_min: 5.51,
        temp_max: 5.51,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 1008,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        { id: 500, main: "Rain", description: "небольшой дождь", icon: "10d" },
      ],
      clouds: { all: 99 },
      wind: { speed: 7.33, deg: 277, gust: 11.66 },
      visibility: 10000,
      pop: 0.2,
      rain: { "3h": 0.15 },
      sys: { pod: "d" },
      dt_txt: "2022-10-11 12:00:00",
    },
    {
      dt: 1665500400,
      main: {
        temp: 4.6,
        feels_like: 0.55,
        temp_min: 4.6,
        temp_max: 4.6,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04n",
        },
      ],
      clouds: { all: 63 },
      wind: { speed: 5.61, deg: 267, gust: 10.16 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-11 15:00:00",
    },
    {
      dt: 1665511200,
      main: {
        temp: 2.35,
        feels_like: -1.96,
        temp_min: 2.35,
        temp_max: 2.35,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03n",
        },
      ],
      clouds: { all: 39 },
      wind: { speed: 4.97, deg: 256, gust: 9.41 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-11 18:00:00",
    },
    {
      dt: 1665522000,
      main: {
        temp: 3.09,
        feels_like: -0.49,
        temp_min: 3.09,
        temp_max: 3.09,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1009,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03n",
        },
      ],
      clouds: { all: 38 },
      wind: { speed: 4, deg: 268, gust: 7.71 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-11 21:00:00",
    },
    {
      dt: 1665532800,
      main: {
        temp: 3.18,
        feels_like: 0.01,
        temp_min: 3.18,
        temp_max: 3.18,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1010,
        humidity: 92,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04n",
        },
      ],
      clouds: { all: 69 },
      wind: { speed: 3.41, deg: 280, gust: 5.77 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-12 00:00:00",
    },
    {
      dt: 1665543600,
      main: {
        temp: 2.52,
        feels_like: -0.86,
        temp_min: 2.52,
        temp_max: 2.52,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1012,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04d",
        },
      ],
      clouds: { all: 77 },
      wind: { speed: 3.51, deg: 309, gust: 6.08 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-12 03:00:00",
    },
    {
      dt: 1665554400,
      main: {
        temp: 5.36,
        feels_like: 1.78,
        temp_min: 5.36,
        temp_max: 5.36,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1013,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04d",
        },
      ],
      clouds: { all: 66 },
      wind: { speed: 5.01, deg: 322, gust: 6.82 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-12 06:00:00",
    },
    {
      dt: 1665565200,
      main: {
        temp: 5.78,
        feels_like: 2.31,
        temp_min: 5.78,
        temp_max: 5.78,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1015,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04d" },
      ],
      clouds: { all: 99 },
      wind: { speed: 5, deg: 330, gust: 7.1 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-12 09:00:00",
    },
    {
      dt: 1665576000,
      main: {
        temp: 4.39,
        feels_like: 1.55,
        temp_min: 4.39,
        temp_max: 4.39,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1017,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04d" },
      ],
      clouds: { all: 93 },
      wind: { speed: 3.31, deg: 335, gust: 4.69 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-12 12:00:00",
    },
    {
      dt: 1665586800,
      main: {
        temp: 3.72,
        feels_like: 0.47,
        temp_min: 3.72,
        temp_max: 3.72,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1019,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03n",
        },
      ],
      clouds: { all: 37 },
      wind: { speed: 3.7, deg: 326, gust: 5 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-12 15:00:00",
    },
    {
      dt: 1665597600,
      main: {
        temp: 2.26,
        feels_like: -1.39,
        temp_min: 2.26,
        temp_max: 2.26,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1020,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03n",
        },
      ],
      clouds: { all: 38 },
      wind: { speed: 3.82, deg: 333, gust: 4.82 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-12 18:00:00",
    },
    {
      dt: 1665608400,
      main: {
        temp: 1.73,
        feels_like: -2.02,
        temp_min: 1.73,
        temp_max: 1.73,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1021,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03n",
        },
      ],
      clouds: { all: 30 },
      wind: { speed: 3.8, deg: 321, gust: 4.43 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-12 21:00:00",
    },
    {
      dt: 1665619200,
      main: {
        temp: 0.67,
        feels_like: -2.79,
        temp_min: 0.67,
        temp_max: 0.67,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1023,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "небольшая облачность",
          icon: "02n",
        },
      ],
      clouds: { all: 21 },
      wind: { speed: 3.11, deg: 360, gust: 3.12 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-13 00:00:00",
    },
    {
      dt: 1665630000,
      main: {
        temp: 1.31,
        feels_like: -0.59,
        temp_min: 1.31,
        temp_max: 1.31,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1024,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "небольшая облачность",
          icon: "02d",
        },
      ],
      clouds: { all: 19 },
      wind: { speed: 1.73, deg: 59, gust: 1.77 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-13 03:00:00",
    },
    {
      dt: 1665640800,
      main: {
        temp: 4.42,
        feels_like: 3.48,
        temp_min: 4.42,
        temp_max: 4.42,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1024,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "небольшая облачность",
          icon: "02d",
        },
      ],
      clouds: { all: 21 },
      wind: { speed: 1.36, deg: 178, gust: 1.28 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-13 06:00:00",
    },
    {
      dt: 1665651600,
      main: {
        temp: 5.83,
        feels_like: 4.45,
        temp_min: 5.83,
        temp_max: 5.83,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1024,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03d",
        },
      ],
      clouds: { all: 28 },
      wind: { speed: 1.89, deg: 191, gust: 1.88 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-13 09:00:00",
    },
    {
      dt: 1665662400,
      main: {
        temp: 3.74,
        feels_like: 0.87,
        temp_min: 3.74,
        temp_max: 3.74,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1024,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "переменная облачность",
          icon: "03d",
        },
      ],
      clouds: { all: 44 },
      wind: { speed: 3.16, deg: 169, gust: 3.14 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-13 12:00:00",
    },
    {
      dt: 1665673200,
      main: {
        temp: 2.19,
        feels_like: -1.65,
        temp_min: 2.19,
        temp_max: 2.19,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1025,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "облачно с прояснениями",
          icon: "04n",
        },
      ],
      clouds: { all: 73 },
      wind: { speed: 4.09, deg: 165, gust: 5.21 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-13 15:00:00",
    },
    {
      dt: 1665684000,
      main: {
        temp: 1.08,
        feels_like: -3.16,
        temp_min: 1.08,
        temp_max: 1.08,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1025,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04n" },
      ],
      clouds: { all: 85 },
      wind: { speed: 4.32, deg: 170, gust: 6.45 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-13 18:00:00",
    },
    {
      dt: 1665694800,
      main: {
        temp: 0.3,
        feels_like: -4.26,
        temp_min: 0.3,
        temp_max: 0.3,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1024,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04n" },
      ],
      clouds: { all: 93 },
      wind: { speed: 4.52, deg: 172, gust: 7.12 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-13 21:00:00",
    },
    {
      dt: 1665705600,
      main: {
        temp: -0.16,
        feels_like: -4.93,
        temp_min: -0.16,
        temp_max: -0.16,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1024,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04n" },
      ],
      clouds: { all: 86 },
      wind: { speed: 4.68, deg: 171, gust: 7.82 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "n" },
      dt_txt: "2022-10-14 00:00:00",
    },
    {
      dt: 1665716400,
      main: {
        temp: 0.36,
        feels_like: -4.44,
        temp_min: 0.36,
        temp_max: 0.36,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1024,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04d" },
      ],
      clouds: { all: 95 },
      wind: { speed: 4.95, deg: 168, gust: 9.32 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-14 03:00:00",
    },
    {
      dt: 1665727200,
      main: {
        temp: 4.03,
        feels_like: -0.65,
        temp_min: 4.03,
        temp_max: 4.03,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1023,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        { id: 804, main: "Clouds", description: "пасмурно", icon: "04d" },
      ],
      clouds: { all: 97 },
      wind: { speed: 6.79, deg: 177, gust: 9.66 },
      visibility: 10000,
      pop: 0,
      sys: { pod: "d" },
      dt_txt: "2022-10-14 06:00:00",
    },
  ],
  city: {
    id: 1541359,
    name: "Лянтор",
    coord: { lat: 61.6195, lon: 72.1555 },
    country: "RU",
    population: 38200,
    timezone: 18000,
    sunrise: 1665279454,
    sunset: 1665317977,
  },
};