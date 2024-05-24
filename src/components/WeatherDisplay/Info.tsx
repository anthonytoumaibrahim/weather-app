import { useWeatherData } from "../../hooks/useWeatherDisplay";
import { Grid } from "@mui/material";
import InfoCard from "./InfoCard";

// Icons
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

const Info = () => {
  const { weatherData } = useWeatherData();

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <InfoCard
          icon={<DeviceThermostatIcon fontSize="large" />}
          title="Temperature"
          value={`${Math.ceil(weatherData?.main?.temp ?? 0)}°C`}
        />
      </Grid>
    </Grid>
  );
};

export default Info;
