import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
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
  constructor(private weatherService: WeatherService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data:{myWeather:CurrentWeather}) => {
      this.myWeather = data.myWeather;
    });
  }

  onSubmit(cityWeather:NgForm) {
    this.weatherService.cityWeatherSearch(cityWeather.value.city).subscribe((data) => {
      this.myWeather = new CurrentWeather(
        data.name,
        data.main.temp,
        data.weather[0].icon,
        data.weather[0].description,
        data.main.temp_max,
        data.main.temp_min
      );
    });
  }
}
