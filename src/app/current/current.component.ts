import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'wa-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  myWeather: CurrentWeather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.myWeather = this.weatherService.currentWeather();
  }

}
