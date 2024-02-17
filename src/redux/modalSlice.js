import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestCarById } from "services/api";

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

const INITIAL_STATE = {
  isOpen: false,
  selectedCardId: null,
  carDetails: null,
  isLoading: false,
  error: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: INITIAL_STATE,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.selectedCardId = action.payload;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      state.selectedCardId = null;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(apiCarById.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiCarById.fulfilled, (state, action) => {
        state.carDetails = action.payload;
        state.isLoading = false;
      })
      .addCase(apiCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
