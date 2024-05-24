import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {},
});

export const {} = weatherDisplaySlice.actions;
