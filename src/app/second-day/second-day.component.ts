import { Component, Input } from '@angular/core';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-second-day',
  templateUrl: './second-day.component.html',
  styleUrls: ['./second-day.component.css']
})
export class SecondDayComponent {
  numbers = [];
  constructor() {
    this.numbers = Array(24).fill(24).map((x,i)=>i);
  }
  @Input() weatherData: WeatherData;
}
