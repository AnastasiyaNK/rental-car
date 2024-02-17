import React from "react";
import CarFoto from "assets/images/image.jpeg";
import { StyledCard } from "./Card.styled";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modalSlice";
import { ReactComponent as IconHeart } from "assets/icons/heart.svg";
import { ReactComponent as IconHeartEmpty } from "assets/icons/heartEmpty.svg";
import { toggleFavorite } from "../../redux/carsSlice";
import { selectFavoriteCars } from "../../redux/carsSlice.selectors";

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
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);

  const handlerOpenModal = () => {
    dispatch(openModal(id));
  };

  const handlerToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };
  const isCardFavorite = favoriteCars.includes(id);
  const formattedAddress = address.split(", ");
  const tags = [...formattedAddress, rentalCompany, type, model, mileage];
  return (
    <StyledCard>
      <img className="card-img" src={img || CarFoto} alt="car" />
      <button
        onClick={handlerToggleFavorite}
        className="heart-btn"
        type="button"
      >
        {isCardFavorite ? <IconHeart /> : <IconHeartEmpty />}
      </button>
      <div className="wrapper">
        <h3 className="card-title">
          {make} <span className="current-title">{model}</span>, {year}
        </h3>
        <p className="card-price">{rentalPrice}</p>
      </div>

      <p className="card-description">{tags.join(" | ")}</p>

      <button onClick={handlerOpenModal} className="card-btn">
        Learn more
      </button>
    </StyledCard>
  );
};

export default CardCars;
