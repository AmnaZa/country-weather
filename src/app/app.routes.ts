import { Routes } from '@angular/router';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

export const routes: Routes = [
  { path: '', component: WeatherCardComponent },
  { path: 'view', component: WeatherDetailsComponent },
];
