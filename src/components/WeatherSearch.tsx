import { Button, FormControl, TextField } from "@mui/material";

const WeatherSearch = () => {
  return (
    <form noValidate autoComplete="off">
      <FormControl sx={{ display: "flex", flexDirection: "row" }} fullWidth>
        <TextField
          id="weather-search"
          label="Enter a City name, e.g: Dubai, UAE"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained">Search</Button>
      </FormControl>
    </form>
  );
};

export default WeatherSearch;
