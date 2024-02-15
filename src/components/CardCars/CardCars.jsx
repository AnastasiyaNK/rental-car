import React from "react";
import CarFoto from "assets/images/image.jpeg";
import { StyledCard } from "./Card.styled";

const CardCars = () => {
  return (
    <StyledCard>
      <li className="card-item">
        <img src={CarFoto} alt="car" />
        <h2 className="card-title">Buick Enclave, 2008</h2>
        <p className="card-price">$40</p>
        <div className="card-wrapper">
          <span className="card-description">Lviv | </span>
          <span className="card-description">Ukraine | </span>
          <span className="card-description">Luxury Car Rentals | </span>
          <span className="card-description">Luxury Car Rentals | </span>
          <span className="card-description">Premium | </span>
          <span className="card-description">SUV | </span>
          <span className="card-description">Enclave | </span>
          <span className="card-description">9582 | </span>
          <span className="card-description">Power liftgate | </span>
        </div>
        <button className="card-btn">Learn more</button>
      </li>
    </StyledCard>
  );
};

export default CardCars;
