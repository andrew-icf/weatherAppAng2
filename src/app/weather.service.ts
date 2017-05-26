import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/RX';

import { CurrentWeather } from './current-weather';

@Injectable()
export class WeatherService {
  current: CurrentWeather = new CurrentWeather(
    'New York',
    '80',
    'https://openclipart.org/image/2400px/svg_to_png/220482/1433924438.png',
    'Sunny',
    '96',
    '72');
  constructor(private http:Http) { }

  // currentWeather() {
  //   return this.current;
  // }

  localWeather(lat:string, long:string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f98fd6d223721339818d01667b4d21a5&units=imperial`)
      .map((response:Response) => response.json());
  }
}
