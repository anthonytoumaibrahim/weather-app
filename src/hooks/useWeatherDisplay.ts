import { useEffect, useState } from "react";
import { WeatherDataInterface } from "../shared/interfaces/WeatherData.interface";
import { WeatherDisplayType } from "../shared/types/WeatherDisplay.type";
import { useAppSelector } from "./redux";

// Images
import Thunderstorm_bg from "../assets/images/2xx.jpg";
import Drizzle_bg from "../assets/images/3xx.jpg";
import Rain_bg from "../assets/images/5xx.jpg";
import Snow_bg from "../assets/images/6xx.jpg";
import Fog_bg from "../assets/images/7xx.jpg";
import Cloudy_bg from "../assets/images/8xx.jpg";
import Sunny_bg from "../assets/images/800.jpg";

export const useWeatherData = () => {
  const weatherDisplaySelector = useAppSelector(
    (state) => state.weatherDisplaySlice
  );
  // Dummy data for testing
  const [weatherData, setWeatherData] = useState<WeatherDataInterface | null>(
    null
  );
  const [cityInStorage, setCityInStorage] = useState<boolean>(false);
  const [loadError, setLoadError] = useState<boolean>(false);

  const storedCities: Array<WeatherDisplayType> = JSON.parse(
    localStorage.getItem("weather-app-cities") ?? "[]"
  );

  const addCityToStorage = () => {
    const city = weatherDisplaySelector;
    storedCities.push(city);
    localStorage.setItem("weather-app-cities", JSON.stringify(storedCities));
    setCityInStorage(true);
  };

  const removeCityFromStorage = () => {
    const cityName = weatherDisplaySelector.cityName;
    const newCitiesInStorage = storedCities.filter(
      (city) => city.cityName !== cityName
    );
    localStorage.setItem(
      "weather-app-cities",
      JSON.stringify(newCitiesInStorage)
    );
    setCityInStorage(false);
  };

  const getWeatherImage = () => {
    const weatherId = weatherData?.weather?.[0]?.id;
    if (weatherId === 800) {
      return Sunny_bg;
    }

    const weatherIdRange = Math.floor((weatherId ?? 200) / 100);
    switch (weatherIdRange) {
      case 2:
        return Thunderstorm_bg;
      case 3:
        return Drizzle_bg;
      case 5:
        return Rain_bg;
      case 6:
        return Snow_bg;
      case 7:
        return Fog_bg;
      case 8:
        return Cloudy_bg;
      default:
        return Sunny_bg;
    }
  };

  useEffect(() => {
    const cityName = weatherDisplaySelector.cityName;
    const existsArr = storedCities.filter((city) => city.cityName === cityName);
    setCityInStorage(existsArr?.length > 0);
  }, [weatherData, storedCities, weatherDisplaySelector.cityName]);

  return {
    weatherData,
    setWeatherData,
    addCityToStorage,
    cityInStorage,
    removeCityFromStorage,
    getWeatherImage,
    loadError,
    setLoadError,
  };
};
