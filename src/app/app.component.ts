import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherCardComponent } from './weather-card/weather-card.component'; // Make sure the path is correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherCardComponent], // ✅ COMBINE THEM HERE
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ also fix typo: it should be "styleUrls", not "styleUrl"
})
export class AppComponent {
  title = 'country-weather';
}
