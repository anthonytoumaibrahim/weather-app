import { useState } from "react";
import { useWeatherData } from "../hooks/useWeatherDisplay";
import { useAppDispatch } from "../hooks/redux";

// MUI
import {
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";

// Icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { WeatherDisplayType } from "../shared/types/WeatherDisplay.type";

const Favorites = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { storedCities } = useWeatherData();
  const dispatch = useAppDispatch();

  const handleCitySelection = (city: WeatherDisplayType) => {
    dispatch({
      type: "weatherDisplaySlice/addCity",
      payload: {
        cityName: city.cityName,
        lat: city.lat,
        long: city.long,
      },
    });
    setIsOpen(false);
  };

  return (
    <>
      <Tooltip
        title="Opens the cities that you added to your Favorites"
        placement="top"
      >
        <Button
          color="error"
          endIcon={<FavoriteBorderOutlinedIcon fontSize="large" />}
          onClick={() => setIsOpen(true)}
        >
          See Favorite Cities
        </Button>
      </Tooltip>
      <Dialog onClose={() => setIsOpen(false)} open={isOpen}>
        <DialogTitle textAlign="center">Favorite Cities</DialogTitle>
        {storedCities.length === 0 && (
          <Typography paddingX={2} gutterBottom>
            You haven't added any city to your Favorites yet.
          </Typography>
        )}
        <List sx={{ pt: 0, px: 2 }}>
          {storedCities.map((city, index) => (
            <ListItem disableGutters disablePadding key={index}>
              <ListItemButton
                onClick={() => handleCitySelection(city)}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <ListItemText primary={city.cityName} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </>
  );
};

export default Favorites;
