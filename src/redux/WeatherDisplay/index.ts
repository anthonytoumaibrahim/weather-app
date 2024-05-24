import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { WeatherDisplayType } from "../../shared/types/WeatherDisplay.type";

const initState: WeatherDisplayType = {
  cityName: "Dubai",
  long: 55.2925,
  lat: 25.2653,
};

export const weatherDisplaySlice = createSlice({
  initialState: initState,
  name: "weatherDisplaySlice",
  reducers: {
    addCity: (state, action: PayloadAction<WeatherDisplayType>) => {
      state.cityName = action.payload.cityName;
      state.lat = action.payload.lat;
      state.long = action.payload.long;
    },
  },
});

export const { addCity } = weatherDisplaySlice.actions;
