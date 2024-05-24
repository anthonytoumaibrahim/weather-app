import { ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface WeatherSearchProps {
  cityName: string;
  setCityName: (name: string) => void;
  submitError: boolean;
  isSearching: boolean;
}

const WeatherSearch = ({
  cityName,
  setCityName,
  submitError = false,
  isSearching = false,
}: WeatherSearchProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCityName(e.target.value);
  };

  return (
    <TextField
      id="weather-search"
      label="Enter a city name, e.g: Dubai"
      variant="outlined"
      value={cityName}
      onChange={handleInputChange}
      error={submitError}
      fullWidth
      disabled={isSearching}
    />
  );
};

export default WeatherSearch;
