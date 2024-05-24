import { useState } from "react";
import { useWeatherData } from "../hooks/useWeatherDisplay";

// MUI
import {
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tooltip,
} from "@mui/material";

// Icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ClearIcon from "@mui/icons-material/Clear";

const Favorites = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { storedCities, removeCityFromStorage } = useWeatherData();

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
        <DialogTitle>Favorite Cities</DialogTitle>
        <List sx={{ pt: 0, px: 2 }}>
          {storedCities.map((city, index) => (
            <ListItem
              disableGutters
              disablePadding
              key={index}
              secondaryAction={
                <IconButton>
                  <ClearIcon color="error" />
                </IconButton>
              }
            >
              <ListItemButton
                onClick={() => console.log(city.cityName)}
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
