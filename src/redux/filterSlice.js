import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  carBrand: null,
  carRental: null,
  mileageFrom: null,
  mileageTo: null,
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
  },
});

export const { setFilterBrand, setFilterRental, setFilterFrom, setFilterTo } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;