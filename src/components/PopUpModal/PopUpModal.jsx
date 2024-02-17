import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiCarById, closeModal } from "../../redux/modalSlice";
import { StylrdPopUpModal } from "./PopUpModal.styled";
import { ReactComponent as IconClose } from "../../assets/icons/x.svg";
import {
  selectCarDetails,
  selectCardId,
  selectOpenModal,
} from "../../redux/carsSlice.selectors";

const PopUpModal = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectOpenModal);
  const selectedCardId = useSelector(selectCardId);
  const carDetails = useSelector(selectCarDetails);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    const handleEscapeClick = (event) => {
      if (event.code === "Escape") {
        dispatch(closeModal());
      }
    };

    window.addEventListener("keydown", handleEscapeClick);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
    };
  }, [dispatch]);

  useEffect(() => {
    if (selectedCardId !== null) {
      dispatch(apiCarById(selectedCardId));
    }
  }, [dispatch, selectedCardId]);

  if (!open) return null;

  const [, city, country] = carDetails?.address?.split(", ") ?? [];
  const conditions = carDetails?.rentalConditions?.split("\n");
  const options = [
    city,
    country,
    `Id: ${carDetails?.id}`,
    `Year: ${carDetails?.year}`,
    `Type: ${carDetails?.type}`,
    `FuelConsumption: ${carDetails?.fuelConsumption}`,
    `EngineSize: ${carDetails?.engineSize}`,
  ];

  return (
    <StylrdPopUpModal onClick={handleOverlayClick}>
      {carDetails !== null && (
        <div className="pop-up-container">
          <button
            className="close-btn"
            type="button"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <IconClose className="close-btn-svg" />
          </button>
          <div className="container">
            <img
              src={carDetails?.img}
              alt={carDetails?.description}
              className="image"
            />
            <div className="title">
              <p>
                {carDetails?.make}{" "}
                <span className="model">{carDetails?.model}</span>,{" "}
                {carDetails?.year}
              </p>
            </div>
            <div className="options">{options?.join(" | ")}</div>
            <p>{carDetails?.description}</p>
            <div>
              <h3>Accessories and functionalities:</h3>
              <p>{carDetails?.accessories.join(" | ")}</p>
            </div>
            <div>
              <h3>Rental Conditions: </h3>
              <p>
                {conditions?.map((item) => (
                  <span key={item}>{item}</span>
                ))}
                Mileage: <span>{carDetails?.mileage}</span>
                Price: <span>{carDetails?.rentalPrice}</span>
              </p>
            </div>
          </div>
          <button type="button" className="rentBtn">
            Rental car
          </button>

          {/* <img className="card-img" src={carDetails.img} alt="car" />

          <h3 className="card-title">
            {carDetails.make}{" "}
            <span className="current-title">{carDetails.model}</span>,{" "}
            {carDetails.year}
          </h3>

          <p className="card-description">{tags.join(" | ")}</p>

          <p className="main-description">
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </p>
          <p className="title-text">Accessories and functionalities:</p>
          <p className="card-description">
            Leather seats | Panoramic sunroof | Power liftgate Premium audio
            system Remote start Blind-spot monitoring
          </p>
          <p className="title-text">Rental Conditions:</p>
          <p className="text">Minimum age : 25</p>
          <p className="text">
            Mileage: <span className="current-number"></span>
            {carDetails.mileage}
          </p>
          <p className="text">
            Price: <span className="current-number"></span>
            {carDetails.rentalPrice}
          </p>

          <button className="btn">Rental car</button> */}
        </div>
      )}
    </StylrdPopUpModal>
  );
};

export default PopUpModal;
