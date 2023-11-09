import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
// import { CountryCardComponent } from 'src/app/country-card/country-card.component';
import axios from 'axios';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  countries: any = []
  weather: any = {};
  private url: string = 'https://countriesnow.space/api/v0.1/countries';
  ngOnInit(): void {
    fetch(this.url)
      .then(response => response.json()).then(response => {
        this.countries = response.data;
        console.log(this.countries);
      });
  }

  showWeather(country: any) {
    console.log('country' + country);
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + country + '&APPID=794ee95e63c5a32aaf88cd813fa2e425').then(response => response.json()).then(response => {
      console.log(response);
      this.weather = {
        'temperature': response.main.temp,
        'wind': response.wind.speed,
        'humidity': response.main.humidity,
      }
      alert(`
        Temperature: ${this.weather.temperature}\n
        Wind Speed: ${this.weather.wind} \n
        Humidity: ${this.weather.humidity}
        `)
    });
  }
}
