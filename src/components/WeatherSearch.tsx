// React stuff
import { ChangeEvent, FormEvent, useState } from "react";

// MUI components
import { Button, FormControl, TextField } from "@mui/material";

const WeatherSearch = () => {
  const [cityName, setCityName] = useState("");
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSubmitError(false);
    setCityName(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (cityName.trim() === "") {
      return setSubmitError(true);
    }
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
      <FormControl sx={{ display: "flex", flexDirection: "row" }} fullWidth>
        <TextField
          id="weather-search"
          label="Enter a city name, e.g: Dubai, UAE"
          variant="outlined"
          value={cityName}
          onChange={handleInputChange}
          error={submitError}
          fullWidth
        />
        <Button
          variant="contained"
          color={submitError ? "error" : "primary"}
          type="submit"
        >
          Search
        </Button>
      </FormControl>
    </form>
  );
};

export default WeatherSearch;
