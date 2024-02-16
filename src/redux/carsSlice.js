import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  requestAddCars,
  requestCarById,
  requestCars,
  requestDeleteCar,
} from "services/api";

export const apiGetCars = createAsyncThunk(
  "cars/carList",
  async (_, thunkApi) => {
    try {
      const response = await requestCars();
      console.log(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiAddCars = createAsyncThunk(
  "cars/carAdd",
  async (_, thunkApi) => {
    try {
      const response = await requestAddCars();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiCarById = createAsyncThunk(
  "cars/carById",
  async (carId, thunkApi) => {
    try {
      const response = await requestCarById(carId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiDeleteCar = createAsyncThunk(
  "cars/deleteCar",
  async (carId, thunkApi) => {
    try {
      const response = await requestDeleteCar(carId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

export const carSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder

      //---------Get----------
      .addCase(apiGetCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      //---------Add----------
      .addCase(apiAddCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      //---------getOwn----------
      .addCase(apiCarById.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      //---------deleteOwn----------
      .addCase(apiDeleteCar.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          apiGetCars.pending,
          apiAddCars.pending,
          apiCarById.pending,
          apiDeleteCar.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetCars.rejected,
          apiAddCars.rejected,
          apiCarById.rejected,
          apiDeleteCar.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const carReducer = carSlice.reducer;
