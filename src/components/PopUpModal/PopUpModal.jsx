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
import { createPortal } from "react-dom";

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
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
      document.body.style.overflow = "auto";
    };
  }, [dispatch, open]);

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

  return createPortal(
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

          <img
            src={carDetails?.img}
            alt={carDetails?.description}
            className="card-img"
          />
          <div className="title">
            <h3 className="card-title">
              {carDetails?.make}{" "}
              <span className="current-title">{carDetails?.model}</span>,{" "}
              {carDetails?.year}
            </h3>
          </div>
          <div className="card-description">{options?.join(" | ")}</div>
          <p className="main-description">{carDetails?.description}</p>
          <div>
            <h4 className="title-text">Accessories and functionalities:</h4>
            <p className="card-description">
              {carDetails?.accessories.join(" | ")}
            </p>
          </div>

          <h4 className="title-text">Rental Conditions: </h4>
          <div className="condition-wrapper">
            {conditions?.map((item, index) => (
              <p className="text" key={`${carDetails?.id}00${index}`}>
                {index !== 0 ? (
                  item
                ) : (
                  <>
                    Minimum age: <span>{item.substr(13, 2)}</span>
                  </>
                )}
              </p>
            ))}
            <p>
              Mileage:{" "}
              <span className="current-number">{carDetails?.mileage}</span>
            </p>
            <p className="text">
              Price:{" "}
              <span className="current-number">{carDetails?.rentalPrice}</span>
            </p>
          </div>

          <a href="tel: +380730000000">
            <button type="button" className="btn">
              Rental car
            </button>
          </a>
        </div>
      )}
    </StylrdPopUpModal>,
    document.getElementById("portal")
  );
};

export default PopUpModal;
