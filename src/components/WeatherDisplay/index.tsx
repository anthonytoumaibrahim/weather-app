import { useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";
import { useWeatherData } from "../../hooks/useWeatherDisplay";

// MUI
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

// Components
import Info from "./Info";

// Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";

const WeatherDisplay = () => {
  const {
    weatherData,
    setWeatherData,
    addCityToStorage,
    cityInStorage,
    getWeatherImage,
    removeCityFromStorage,
  } = useWeatherData();

  const weatherDisplaySelector = useAppSelector(
    (state) => state.weatherDisplaySlice
  );

  useEffect(() => {
    // Load weather data on load
  }, []);

  return (
    <Box sx={{ display: "flex" }} alignItems="center" justifyContent="center">
      <Card sx={{ width: "100%" }}>
        <Box
          height={360}
          position="relative"
          sx={{ display: "flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            position="absolute"
            zIndex={1}
            top={20}
            left={20}
            variant="h4"
            component="div"
            color="white"
          >
            Weather in {weatherDisplaySelector.cityName}
          </Typography>
          <CardMedia
            sx={{
              height: "100%",
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
            image={getWeatherImage()}
            title={weatherData?.weather?.[0]?.description}
          />

          <Box position="relative" zIndex={1}>
            <Box sx={{ display: "flex" }} alignItems="center">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
                alt=""
              />
              <Box>
                <Typography variant="h4" color="white" fontWeight="bold">
                  {Math.round(weatherData?.main.temp ?? 0)}°C
                </Typography>
                <Typography variant="body2" color="white">
                  Feels like{" "}
                  <strong>
                    {Math.round(weatherData?.main.feels_like ?? 0)}°C
                  </strong>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <CardContent>
          <Info />
          <Typography variant="body2" color="text.secondary">
            The current weather in{" "}
            <strong>{weatherDisplaySelector.cityName}</strong> is{" "}
            <strong>{weatherData?.weather?.[0]?.main}</strong>.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "end" },
          }}
        >
          {cityInStorage ? (
            <Button
              size="small"
              startIcon={<BookmarkRemoveIcon />}
              color="warning"
              onClick={() => removeCityFromStorage()}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              size="small"
              startIcon={<FavoriteIcon />}
              color="error"
              onClick={() => addCityToStorage()}
            >
              Add to Favorites
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default WeatherDisplay;
