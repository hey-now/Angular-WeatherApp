import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrentComponent } from './current/current.component';
import { HourlyComponent } from './hourly/hourly.component';
import { ThreeDayComponent } from './three-day/three-day.component';
import { NextDayComponent } from './next-day/next-day.component';
import { SecondDayComponent } from './second-day/second-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    HourlyComponent,
    ThreeDayComponent,
    NextDayComponent,
    SecondDayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
