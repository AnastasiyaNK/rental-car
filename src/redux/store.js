import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./carsSlice";

export const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});
