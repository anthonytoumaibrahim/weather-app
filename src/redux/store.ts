import { configureStore } from "@reduxjs/toolkit";
import { weatherDisplaySlice } from "./WeatherDisplay";

export const store = configureStore({
  reducer: {
    weatherDisplaySlice: weatherDisplaySlice.reducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
