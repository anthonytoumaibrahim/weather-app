import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/redux";
import { WeatherDataInterface } from "../shared/interfaces/WeatherData.interface";

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

// Images
import Thunderstorm_bg from "../assets/images/2xx.jpg";
import Drizzle_bg from "../assets/images/3xx.jpg";
import Rain_bg from "../assets/images/5xx.jpg";
import Snow_bg from "../assets/images/6xx.jpg";
import Fog_bg from "../assets/images/7xx.jpg";
import Cloudy_bg from "../assets/images/8xx.jpg";
import Sunny_bg from "../assets/images/800.jpg";

const WeatherDisplay = () => {
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
      <Card sx={{ maxWidth: "100%" }} style={{ position: "relative" }}>
        <CardMedia
          sx={{ height: 360 }}
          image={getWeatherImage()}
          title="green iguana"
        />
        <CardContent>
          <Typography
            position="absolute"
            top={20}
            left={20}
            variant="h4"
            component="div"
            color="white"
          >
            {weatherDisplaySelector.cityName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
