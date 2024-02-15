import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestCarById, requestCars, requestDeleteCar } from "services/api";

export const fetchCars = createAsyncThunk(
  "cars/carList",
  async (_, thunkApi) => {
    try {
      const respons = await requestCars();
      return respons;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchCarsById = createAsyncThunk(
  "cars/carById",
  async (carId, thunkApi) => {
    try {
      const respons = await requestCarById(carId);
      return respons;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteCar = createAsyncThunk(
  "cars/deleteCar",
  async (carId, thunkApi) => {
    try {
      const respons = await requestDeleteCar(carId);
      return respons;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
