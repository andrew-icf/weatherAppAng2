import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/RX';

import { CurrentWeather } from './current-weather';

@Injectable()
export class WeatherService {
  myWeather: CurrentWeather;
  location
  constructor(private http:Http) { }
  
  localWeather() {
    return new Promise ((res, rej) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.location = pos.coords;
        const lat = this.location.latitude;
        const long = this.location.longitude;
        return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f98fd6d223721339818d01667b4d21a5&units=imperial`)
        .map((response:Response) => response.json()).toPromise().then((data) => {
          this.myWeather = new CurrentWeather(
            data.name,
            data.main.temp,
            data.weather[0].icon,
            data.weather[0].description,
            data.main.temp_max,
            data.main.temp_min
          );
          res(this.myWeather);
        });
      });
    });
    // return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f98fd6d223721339818d01667b4d21a5&units=imperial`)
    //   .map((response:Response) => response.json());
  }
}
