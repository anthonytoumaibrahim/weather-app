import { Box, Typography } from "@mui/material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const LoadError = () => {
  return (
    <Box>
      <ErrorOutlineIcon fontSize="large" color="error" />
      <Typography fontWeight="bold">Sorry, something went wrong!</Typography>
      <Typography gutterBottom>
        Something prevented us from loading weather data. Please try again
        later.
      </Typography>
      <Typography color="gray" fontSize={14}>
        See the console log for more information.
      </Typography>
    </Box>
  );
};

export default LoadError;
