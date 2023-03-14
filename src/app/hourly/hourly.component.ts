import { Component, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-hourly',
  providers: [WeatherService],
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent {
  numbers = [];
  constructor() {
    this.numbers = Array(25).fill(25).map((x,i)=>i);
  }

  @Input() weatherData: WeatherData;
}
