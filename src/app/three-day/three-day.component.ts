import { Component, Input } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather.model';

@Component({
  selector: 'app-three-day',
  providers: [WeatherService],
  templateUrl: './three-day.component.html',
  styleUrls: ['./three-day.component.css']
})
export class ThreeDayComponent {
  @Input() weatherData: WeatherData;
}
