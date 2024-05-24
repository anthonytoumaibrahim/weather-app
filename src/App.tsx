import { Box, Typography } from "@mui/material";
import "./App.css";

// Components
import Container from "@mui/material/Container";
import WeatherSearch from "./components/WeatherSearch";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
