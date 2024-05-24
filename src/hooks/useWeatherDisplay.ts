import { useEffect, useState } from "react";
import { WeatherDataInterface } from "../shared/interfaces/WeatherData.interface";
import { WeatherDisplayType } from "../shared/types/WeatherDisplay.type";
import { useAppSelector } from "./redux";

export const useWeatherData = () => {
  const weatherDisplaySelector = useAppSelector(
    (state) => state.weatherDisplaySlice
  );
  // Dummy data for testing
  const [weatherData, setWeatherData] = useState<WeatherDataInterface | null>({
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    main: {
      temp: 35.83,
      feels_like: 37.53,
      temp_min: 35.19,
      temp_max: 37.22,
      pressure: 1002,
      humidity: 36,
    },
    visibility: 10000,
    wind: {
      speed: 6.69,
      deg: 290,
    },
    clouds: {
      all: 0,
    },
    sys: {
      type: 1,
      id: 7537,
      country: "AE",
      sunrise: 1716514230,
      sunset: 1716562872,
    },
  });
  const [cityInStorage, setCityInStorage] = useState<boolean>(false);

  const addCityToStorage = (city: WeatherDisplayType) => {
    const storedCities: Array<WeatherDisplayType> = JSON.parse(
      localStorage.getItem("weather-app-cities") ?? "[]"
    );
    storedCities.push(city);
    localStorage.setItem("weather-app-cities", JSON.stringify(storedCities));
  };

  const checkIfCityInStorage = () => {
    const cityName = weatherDisplaySelector.cityName;
    const storedCities: Array<WeatherDisplayType> = JSON.parse(
      localStorage.getItem("weather-app-cities") ?? "[]"
    );
    const existsArr = storedCities.filter((city) => city.cityName === cityName);
    setCityInStorage(existsArr?.length > 0);
  };

  useEffect(() => {
    checkIfCityInStorage();
  }, [weatherData]);

  return {
    weatherData,
    setWeatherData,
    addCityToStorage,
    cityInStorage,
  };
};
