import { useState } from "react";
import { useWeatherData } from "../hooks/useWeatherDisplay";

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

const Favorites = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { storedCities } = useWeatherData();

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
