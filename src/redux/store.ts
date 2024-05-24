import { configureStore } from "@reduxjs/toolkit";
import { weatherDisplaySlice } from "./WeatherDisplay";

export const store = configureStore({
  reducer: {
    weatherDisplaySlice: weatherDisplaySlice.reducer,
  },
});
