import { useAppSelector } from "./hooks/redux";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import "./App.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// Components
import Container from "@mui/material/Container";
import WeatherForm from "./components/WeatherForm";
import WeatherDisplay from "./components/WeatherDisplay";

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
        <Tooltip
          title="Opens the cities that you added to your Favorites"
          placement="top"
        >
          <Button
            color="error"
            endIcon={<FavoriteBorderOutlinedIcon fontSize="large" />}
          >
            See Favorite Cities
          </Button>
        </Tooltip>
      </Box>
    </Container>
  );
};

export default App;
