export interface ITodayMain {
   temp: number;
   feels_like: unknown;
   temp_min: unknown;
   temp_max: unknown;
   pressure: unknown;
   humidity: unknown;
   sea_level: unknown;
   grnd_level: unknown;
 }
export interface ITodayWeatherList {
     id: unknown;
     main: unknown;
     description: string;
     icon: unknown;
 }
export interface ITodayWind{
   speed: number;
   deg: unknown;
   gust: unknown;
 }
export interface ITodayWeather{
   list: any;
   coord: unknown;
   weather: ITodayWeatherList[];
   base: unknown;
   main: ITodayMain;
   visibility: unknown;
   wind: ITodayWind;
   snow: unknown;
   clouds: unknown;
   dt: unknown;
   sys: unknown;
   timezone: unknown;
   id: unknown;
   name: unknown;
   cod: unknown;
 }