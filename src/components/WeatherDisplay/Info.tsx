import { useWeatherData } from "../../hooks/useWeatherDisplay";
import { Grid } from "@mui/material";
import InfoCard from "./InfoCard";

// Icons
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import BoyIcon from "@mui/icons-material/Boy";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

const Info = () => {
  const { weatherData } = useWeatherData();

  const convertTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return timeString;
  };

  return (
    <Grid container spacing={2} marginBottom={2}>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard
          icon={<DeviceThermostatIcon fontSize="large" color="primary" />}
          title="Temperature"
          value={`${Math.round(weatherData?.main?.temp ?? 0)}°C`}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard
          icon={<BoyIcon fontSize="large" color="primary" />}
          title="Feels Like"
          value={`${Math.round(weatherData?.main?.feels_like ?? 0)}°C`}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard
          icon={<AirIcon fontSize="large" color="primary" />}
          title="Wind Speed"
          value={`${weatherData?.wind.speed}m/h`}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard
          icon={<WaterDropIcon fontSize="large" color="primary" />}
          title="Humidity"
          value={`${weatherData?.main.humidity}%`}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard
          icon={<WbSunnyIcon fontSize="large" color="primary" />}
          title="Sunrise Time"
          value={`${convertTimestamp(weatherData?.sys.sunrise ?? 1)}`}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <InfoCard
          icon={<WbTwilightIcon fontSize="large" color="primary" />}
          title="Sunset Time"
          value={`${convertTimestamp(weatherData?.sys.sunset ?? 1)}`}
        />
      </Grid>
    </Grid>
  );
};

export default Info;
