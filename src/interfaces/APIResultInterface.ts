export default interface APIResultInterface {
  country: string;
  feelsLike: number;
  humidity: number;
  name: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  weather: [
    {
      icon: string;
      description: string;
    },
  ];
}
