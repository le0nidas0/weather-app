import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/weather';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheather-home',
  templateUrl: './wheather-home.component.html',
  styleUrls: []
})
export class WheatherHomeComponent implements OnInit, OnDestroy{
  private readonly destroy$: Subject<any> = new Subject();
  initialCityName = 'São Paulo';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

 constructor(private weatherService: WeatherService) {}


  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response) => {
        response && (this.weatherDatas = response)
        console.log(this.weatherDatas)
      },
      error: (error) => console.log(error)
    });
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName)
    this.initialCityName = '';
  }


  ngOnDestroy(): void {
    this.destroy$.next;
    this.destroy$.complete();

  }
}
