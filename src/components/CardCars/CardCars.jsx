import React from "react";
import CarFoto from "assets/images/image.jpeg";
import { StyledCard } from "./Card.styled";

const CardCars = ({
  id,
  type,
  year,
  make,
  model,
  img,
  rentalPrice,
  rentalCompany,
  address,
  mileage,
}) => {
  const formattedAddress = address.split(", ");
  const tags = [...formattedAddress, rentalCompany, type, model, mileage];
  return (
    <StyledCard>
      <img className="card-img" src={img || CarFoto} alt="car" />
      <div className="wrapper">
        <h3 className="card-title">
          {make} <span className="current-title">{model}</span>, {year}
        </h3>
        <p className="card-price">{rentalPrice}</p>
      </div>

      <p className="card-description">{tags.join(" | ")}</p>

      <button className="card-btn">Learn more</button>
    </StyledCard>
  );
};

export default CardCars;
