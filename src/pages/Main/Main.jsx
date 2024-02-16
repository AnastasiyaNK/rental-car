import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetCars } from "../../redux/carsSlice";
import {
  selectCarError,
  selectCarIsLoading,
  selectCarItems,
} from "../../redux/carsSlice.selectors";
import { CardCars, Loader } from "components";
import { StyledMainPage } from "./Main.styled";
import { MainContainer } from "MainContainer.styled";

const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectCarIsLoading);
  const error = useSelector(selectCarError);
  const cars = useSelector(selectCarItems);

  useEffect(() => {
    dispatch(apiGetCars());
  }, [dispatch]);

  return (
    <MainContainer>
      <StyledMainPage>
        {error && <p>{error}</p>}
        {isLoading && <Loader />}

        <ul className="cars-list">
          {cars?.map(
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

export default Main;
