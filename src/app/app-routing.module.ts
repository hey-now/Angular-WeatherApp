import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { HourlyComponent } from './hourly/hourly.component';
import { ThreeDayComponent } from './three-day/three-day.component';

const routes: Routes = [
  {path: '', redirectTo: 'current', pathMatch: 'full'},
  {path: 'current', component: CurrentComponent},
  {path: 'hourly', component: HourlyComponent},
  {path: 'threeday', component: ThreeDayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
