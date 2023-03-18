import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }
  cityName: string = 'Long Beach'; 
  weatherData?: WeatherData;
  isActive;
  Pictures = [
    {text: 'Sunny', picture: '../assets/sunnyday.jpg'},
    {text: 'Clear', picture: '../assets/clear-night.jpeg'},
    {text: 'Partly cloudy', picture: '../assets/partly-cloudy.webp'},
    {text: 'Cloudy', picture: '../assets/cloudy.jpeg'},
    {text: 'Overcast', picture: '../assets/overcast.jpeg'},
    {text: 'Mist', picture: '../assets/mist.jpeg'},
    {text: 'Patchy rain possible', picture: '../assets/overcast.jpeg'},
    {text: 'Patchy snow possible', picture: '../assets/light-snow.jpeg'},
    {text: 'Patchy sleet possible', picture: '../assets/sleet.jpeg'},
    {text: 'Patchy freezing drizzle possible', picture: '../assets/sleet.jpeg'},
    {text: 'Thundery outbreaks possible', picture: '../assets/thunderstorm.webp'},
    {text: 'Blowing snow', picture: '../assets/blowing-snow.webp'},
    {text: 'Blizzard', picture: '../assets/blizzard.webp'},
    {text: 'Fog', picture: '../assets/fog.jpeg'},
    {text: 'Freezing fog', picture: '../assets/fog.jpeg'},
    {text: 'Patchy light drizzle', picture: '../assets/light-drizzle.jpeg'},
    {text: 'Light drizzle', picture: '../assets/light-drizzle.jpeg'},
    {text: 'Freezing drizzle', picture: '../assets/sleet.jpeg'},
    {text: 'Heavy freezing drizzle', picture: '../assets/sleet.jpeg'},
    {text: 'Patchy light rain', picture: '../assets/light-rain.jpeg'},
    {text: 'Light rain', picture: '../assets/light-rain.jpeg'},
    {text: 'Moderate rain at times', picture: '../assets/moderate-rain.jpeg'},
    {text: 'Moderate rain', picture: '../assets/moderate-rain.jpeg'},
    {text: 'Heavy rain at time', picture: '../assets/heavy-rain.jpeg'},
    {text: 'Heavy rain', picture: '../assets/heavy-rain.jpeg'},
    {text: 'Light freezing rain', picture: '../assets/sleet.jpeg'},
    {text: 'Moderate of heavy freezing rain', picture: '../assets/sleet.jpeg'},
    {text: 'Light sleet', picture: '../assets/sleet.jpeg'},
    {text: 'Moderate of heavy sleet', picture: '../assets/sleet.jpeg'},
    {text: 'Patchy light snow', picture: '../assets/light-snow.jpeg'},
    {text: 'Light snow', picture: '../assets/light-snow2.jpeg'},
    {text: 'Patchy moderate snow', picture: '../assets/moderate-snow.webp'},
    {text: 'Moderate snow', picture: '../assets/moderate-snow.webp'},
    {text: 'Patchy heavy snow', picture: '../assets/heavy-snow.jpeg'},
    {text: 'Heavy snow', picture: '../assets/heavy-snow.jpeg'},
    {text: 'Ice pellets', picture: '../assets/ice-pellets.jpeg'},
    {text: 'Light rain shower', picture: '../assets/light-rain.jpeg'},
    {text: 'Moderate of heavy rain shower', picture: '../assets/moderate-rain.jpeg'},
    {text: 'Torrential rain shower', picture: '../assets/torrential-rain.jpeg'},
    {text: 'Light sleet showers', picture: '../assets/sleet-shower.jpeg'},
    {text: 'Moderate or heavy sleet showers', picture: '../assets/sleet-shower.jpeg'},
    {text: 'Light snow showers', picture: '../assets/light-snow-um.jpeg'},
    {text: 'Moderate or heavy sleet showers', picture: '../assets/moderate-snow.jpeg'},
    {text: 'Light showers of ice pellets', picture: '../assets/ice-pellets.jpeg'},
    {text: 'Moderate or heavy showers of ice pellets', picture: '../assets/ice-pellets.jpeg'},
    {text: 'Patchy light rain with thunder', picture: '../assets/thunder-rain.webp'},
    {text: 'Moderate or heavy rain with thunder', picture: '../assets/thunder-rain.webp'},
    {text: 'Patchy light snow with thunder', picture: '../assets/thunder-snow.jpeg'},
    {text: 'Moderate or heavy snow with thunder', picture: '../assets/thunder-snow.jpeg'},
  ];
  pictureURL;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.getWeatherPicture(this.cityName);
    this.cityName = '';
    this.isActive = 1;

  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.getWeatherPicture(this.cityName);
    this.cityName = '';
  }

  private getWeatherPicture(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        var condition = response.current.condition.text;
        this.pictureURL = this.Pictures.find(x => x.text === condition).picture;
      }
    });
    return this.pictureURL;
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      }
    });
  }
}
