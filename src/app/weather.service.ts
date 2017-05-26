import { Injectable } from '@angular/core';

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
  constructor() { }

  currentWeather() {
    return this.current;
  }
}
