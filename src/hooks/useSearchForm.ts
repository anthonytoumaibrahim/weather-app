import { useState } from "react";

export const useSearchForm = () => {
  const [cityName, setCityName] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const addCityToStorage = () => {
    const storedCities: Array<string> = JSON.parse(
      localStorage.getItem("weather-app-cities") ?? "[]"
    );
    storedCities.push(cityName);
    localStorage.setItem("weather-app-cities", JSON.stringify(storedCities));
  };

  return {
    cityName,
    setCityName,
    submitError,
    setSubmitError,
    isSearching,
    setIsSearching,
    searchError,
    setSearchError,
    addCityToStorage,
  };
};
