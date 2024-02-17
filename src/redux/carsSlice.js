import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { requestAddCars, requestCars, requestDeleteCar } from "services/api";

export const apiGetCars = createAsyncThunk(
  "cars/carList",
  async (page, thunkApi) => {
    try {
      const response = await requestCars(page);

      return { page, response };
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
  favoriteCarIds: [],
};

export const carSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,

  reducers: {
    toggleFavorite(state, action) {
      if (state.favoriteCarIds.includes(action.payload)) {
        state.favoriteCarIds = state.favoriteCarIds.filter(
          (el) => action.payload !== el
        );
      } else {
        state.favoriteCarIds = [...state.favoriteCarIds, action.payload];
      }
    },
  },

  extraReducers: (builder) =>
    builder

      //---------Get----------
      .addCase(apiGetCars.fulfilled, (state, action) => {
        state.items =
          action.payload.page === 1
            ? action.payload.response
            : [...state.items, ...action.payload.response];
        state.isLoading = false;
      })
      //---------Add----------
      .addCase(apiAddCars.fulfilled, (state, action) => {
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

          apiDeleteCar.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export const { toggleFavorite } = carSlice.actions;

export const carReducer = carSlice.reducer;
