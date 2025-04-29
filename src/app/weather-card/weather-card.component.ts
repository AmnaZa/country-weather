import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})

export class WeatherCardComponent implements OnInit {
  country: string = 'USA';
  temperature: number = 22;
  condition: string = 'Sunny';

  constructor() {}

  ngOnInit(): void {}

  changeWeather() {
    const weatherConditions = [
      { temperature: 22, condition: 'Sunny' },
      { temperature: 15, condition: 'Rainy' },
      { temperature: 5, condition: 'Snowy' },
      { temperature: 28, condition: 'Cloudy' }
    ];

    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];

    this.temperature = randomWeather.temperature;
    this.condition = randomWeather.condition;
  }
}
