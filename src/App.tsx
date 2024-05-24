import { useAppSelector } from "./hooks/redux";
import { Box, Typography } from "@mui/material";
import "./App.css";

// Components
import Container from "@mui/material/Container";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";
import Favorites from "./components/Favorites";

const App = () => {
  const weatherDisplaySelector = useAppSelector(
    (state) => state.weatherDisplaySlice
  );

  return (
    <Container maxWidth="md">
      <Box
        marginBlock={4}
        padding={{ xs: 1, md: 4 }}
        textAlign="center"
        sx={{ display: "flex" }}
        gap={2}
        flexDirection="column"
      >
        <Typography variant="h3">
          Welcome to {process.env.REACT_APP_NAME}!
        </Typography>
        <Typography variant="h5">
          Let's start by searching for a city.
        </Typography>
        <WeatherForm />
        {weatherDisplaySelector.lat && weatherDisplaySelector.long && (
          <WeatherDisplay />
        )}
        <Favorites />
      </Box>
    </Container>
  );
};

export default App;
