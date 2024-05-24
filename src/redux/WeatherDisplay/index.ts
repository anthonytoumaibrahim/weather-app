import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WeatherDisplayType = {
  cityName: string | null;
  lat: string | number | null;
  long: string | number | null;
};

const initState: WeatherDisplayType = {
  cityName: null,
  lat: null,
  long: null,
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
