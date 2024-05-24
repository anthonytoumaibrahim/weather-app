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

// Images
import Thunderstorm_bg from "../../assets/images/2xx.jpg";
import Drizzle_bg from "../../assets/images/3xx.jpg";
import Rain_bg from "../../assets/images/5xx.jpg";
import Snow_bg from "../../assets/images/6xx.jpg";
import Fog_bg from "../../assets/images/7xx.jpg";
import Cloudy_bg from "../../assets/images/8xx.jpg";
import Sunny_bg from "../../assets/images/800.jpg";

const WeatherDisplay = () => {
  const { weatherData, setWeatherData } = useWeatherData();

  const weatherDisplaySelector = useAppSelector(
    (state) => state.weatherDisplaySlice
  );

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
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default WeatherDisplay;
