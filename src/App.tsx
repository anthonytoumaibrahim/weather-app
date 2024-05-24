import { Box, Typography } from "@mui/material";
import "./App.css";
import Container from "@mui/material/Container";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box padding={4}>
        <Typography variant="h3" component="h3" align="center">
          Welcome to {process.env.REACT_APP_NAME}!
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
