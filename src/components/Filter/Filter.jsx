import React, { useState } from "react";
import { StyledFilter } from "./Filter.styled";
import Select from "react-select";
import { useDispatch } from "react-redux";
import {
  setFilterBrand,
  setFilterFrom,
  setFilterRental,
  setFilterTo,
} from "../../redux/filterSlice";

const carBrandsOptions = [
  { value: "Buick", label: "Buick" },
  { value: "Volvo", label: "Volvo" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Bentley", label: "Bentley" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Kia", label: "Kia" },
  { value: "Land", label: "Land" },
];

const carRentOption = Array.from({ length: 20 }).map((_, index) => ({
  value: 30 + index * 10,
  label: 30 + index * 10,
}));

const Filter = () => {
  const [carBrand, setCarBrand] = useState(null);
  const [carRental, setCarRental] = useState(null);
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const dispatch = useDispatch();

  //   const setSelectedCarBrandOption = (option) =>
  //     dispatch(setFilterBrand(option.label));
  //   const setSelectedCarRentOption = (option) =>
  //     dispatch(setFilterRent(option.label));

  const onSubmit = (e) => {
    e.preventDefault();
    if (carBrand) {
      dispatch(setFilterBrand(carBrand.value));
    }
    if (carRental) {
      dispatch(setFilterRental(carRental.value));
    }

    dispatch(setFilterFrom(mileageFrom));
    dispatch(setFilterTo(mileageTo));
  };
  return (
    <StyledFilter onSubmit={onSubmit}>
      <div>
        <p>Car brand</p>
        <Select
          defaultValue={carBrand}
          onChange={setCarBrand}
          options={carBrandsOptions}
        />
      </div>
      <div>
        <p>Price/ 1 hour</p>
        <Select
          defaultValue={carRental}
          onChange={setCarRental}
          options={carRentOption}
        />
      </div>
      <div>
        <p>Car mileage / km</p>
        <input
          value={mileageFrom}
          onChange={(e) => setMileageFrom(e.target.value)}
          type="text"
        />
        <input
          value={mileageTo}
          onChange={(e) => setMileageTo(e.target.value)}
          type="text"
        />
      </div>
      <button type="submit" className="saerchBtn">
        Search
      </button>
    </StyledFilter>
  );
};

export default Filter;
