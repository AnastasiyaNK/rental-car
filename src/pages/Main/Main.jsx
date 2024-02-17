import React, { useEffect, useState } from "react";
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
  const [page, setPage] = useState(1);
  console.log(isLoading);
  const heandlerLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(apiGetCars(page));
  }, [dispatch, page]);

  return (
    <MainContainer>
      <StyledMainPage>
        {error && <p>{error}</p>}
        {isLoading && <Loader />}
        <div></div>

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
        <button onClick={heandlerLoadMore} className="load-more">
          Load more
        </button>
      </StyledMainPage>
    </MainContainer>
  );
};

export default Main;
