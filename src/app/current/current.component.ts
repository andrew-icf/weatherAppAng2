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
    this.myWeather = this.weatherService.currentWeather();
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const long = this.location.longitude;
      this.weatherService.localWeather(lat, long).subscribe((data) => {
        console.log('data', data);
      })
    });
  }

}
