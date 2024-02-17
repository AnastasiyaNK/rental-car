import React from "react";
import { useSelector } from "react-redux";

import {
  selectCarError,
  selectCarIsLoading,
  selectCarItems,
  selectFavoriteCars,
} from "../../redux/carsSlice.selectors";
import { CardCars, Loader } from "components";
import { StyledMainPage } from "../Main/Main.styled";
import { MainContainer } from "../../MainContainer.styled";

const Favorites = () => {
  const isLoading = useSelector(selectCarIsLoading);
  const error = useSelector(selectCarError);
  const cars = useSelector(selectCarItems);
  const favoriteCarIds = useSelector(selectFavoriteCars);
  const favoriteCars = cars?.filter((el) => favoriteCarIds.includes(el.id));
  return (
    <MainContainer>
      <StyledMainPage>
        {error && <p>{error}</p>}
        {isLoading && <Loader />}
        <div></div>

        <ul className="cars-list">
          {favoriteCars?.map(
            ({
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
              return (
                <CardCars
                  key={id}
                  id={id}
                  type={type}
                  year={year}
                  make={make}
                  model={model}
                  img={img}
                  rentalPrice={rentalPrice}
                  rentalCompany={rentalCompany}
                  address={address}
                  mileage={mileage}
                />
              );
            }
          )}
        </ul>
      </StyledMainPage>
    </MainContainer>
  );
};

export default Favorites;
