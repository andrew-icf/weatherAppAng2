import { Component, OnInit } from '@angular/core';
import 'rxjs/RX';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'wa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  myWeather: CurrentWeather;
  location
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    // this.myWeather = this.weatherService.currentWeather();
    this.getCurrentWeather();
  }

  getCurrentWeather() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const long = this.location.longitude;
      this.weatherService.localWeather(lat, long).subscribe((data) => {
        this.myWeather = new CurrentWeather(
          data.name,
          data.main.temp,
          data.weather[0].icon,
          data.weather[0].description,
          data.main.temp_max,
          data.main.temp_min,
        );
      });
    });
  }
}
