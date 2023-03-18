import { Component, Input } from '@angular/core';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-next-day',
  templateUrl: './next-day.component.html',
  styleUrls: ['./next-day.component.css']
})
export class NextDayComponent {
  numbers = [];
  constructor() {
    this.numbers = Array(24).fill(24).map((x,i)=>i);
  }
  @Input() weatherData: WeatherData;
}
