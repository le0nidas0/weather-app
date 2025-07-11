export interface WeatherDatas{
  coord:{
    lon: number,
    lat: number
  },

  weather: [
    {
    id: number,
    main: string,
    description: string,
    ico: string
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_liker: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  },
  visibility: number;
  wind: {
    speed: number;
    deg: number
  },
  clouds: {
    all: number
  },
  sys:{
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;

}


