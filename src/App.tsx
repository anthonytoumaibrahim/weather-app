import { Box, Typography } from "@mui/material";
import "./App.css";
import Container from "@mui/material/Container";
import WeatherSearch from "./components/WeatherSearch";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box
        padding={4}
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
        <WeatherSearch />
      </Box>
    </Container>
  );
};

export default App;
