export class CurrentWeather {
  constructor(public cityName: string,
              public temp: string,
              public icon: string,
              public kindOfWeather: string,
              public tempMax: string,
              public tempMin: string) {}
}
