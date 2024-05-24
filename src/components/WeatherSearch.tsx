// React stuff & hooks
import { ChangeEvent, FormEvent } from "react";
import { useSearchForm } from "../hooks/useSearchForm";

// MUI components
import { Alert, FormControl, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const WeatherSearch = () => {
  const {
    cityName,
    setCityName,
    isSearching,
    setIsSearching,
    searchError,
    setSearchError,
    submitError,
    setSubmitError,
    addCityToStorage,
  } = useSearchForm();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubmitError(false);
    setCityName(e.target.value);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSearchError(null);
    if (cityName.trim() === "") {
      return setSubmitError(true);
    }
    setIsSearching(true);
    await searchForCity();
  };

  const searchForCity = async () => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      );
      const data = await response.json();
      if (data?.length === 0) {
        return setSearchError("Sorry, couldn't find a city with this name.");
      }
      // City found
      addCityToStorage();
    } catch (error) {
      setSearchError(
        "Sorry, something went wrong and we couldn't make a request to the API."
      );
    }

    setIsSearching(false);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
      <FormControl
        sx={{ display: "flex", flexDirection: "row", gap: 2 }}
        fullWidth
      >
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
        <LoadingButton
          variant="contained"
          color={submitError ? "error" : "primary"}
          type="submit"
          loading={isSearching}
          sx={{ paddingInline: 4 }}
        >
          Search
        </LoadingButton>
      </FormControl>

      {searchError && (
        <Alert severity="error" sx={{ marginTop: 2 }}>
          {searchError}
        </Alert>
      )}
    </form>
  );
};

export default WeatherSearch;
