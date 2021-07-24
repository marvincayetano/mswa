const queryData = async (city: string, country: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},,${country}&appid=${
      import.meta.env.VITE_API_WEATHER
    }&units=metric`,
  );

  if (response.status === 200) {
    const { main, weather, name, sys } = await response.json();

    return {
      feelsLike: Math.round(main.feels_like),
      humidity: main.humidity,
      temp: Math.round(main.temp),
      temp_min: Math.round(main.temp_min),
      temp_max: Math.round(main.temp_max),
      name,
      country: sys.country,
      weather,
    };
  } else {
    return { err: 'Something went wrong!' };
  }
};

export default queryData;
