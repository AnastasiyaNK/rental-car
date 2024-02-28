import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  carBrand: null,
  carRental: null,
  mileageFrom: "",
  mileageTo: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    setFilterBrand: (state, action) => {
      state.carBrand = action.payload;
    },
    setFilterRental: (state, action) => {
      state.carRental = action.payload;
    },
    setFilterFrom: (state, action) => {
      state.mileageFrom = action.payload;
    },
    setFilterTo: (state, action) => {
      state.mileageTo = action.payload;
    },
    resetFilters: () => {
      return INITIAL_STATE;
    },
  },
});

export const {
  setFilterBrand,
  setFilterRental,
  setFilterFrom,
  setFilterTo,
  resetFilters,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
