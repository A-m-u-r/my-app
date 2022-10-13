export interface IWeatherList {
  list: IPeriodWeather[];
  cod: string;
  message: number;
  cnt: number;
  city: ICity;
}
export interface ICity {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export interface IPeriodWeather {
  dt: number;
  main: IMain;
  weather: IWeather[];
  dt_txt: any;
  wind: IWind;
  // это костыль, озночает чтое сть множество свойств с любым типом
  [field: string]: any;
}
export interface IWind {
  speed: number;
  deg?: number;
  gust?: number;
}
export interface IWeather {
  description: string;
  main?: string;
  id: number;
  icon: string;
}
export interface IMain {
  temp: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  sea_level?: number;
  grnd_level?: number;
  humidity?: number;
  temp_kf?: number;
}
