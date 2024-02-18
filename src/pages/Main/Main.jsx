import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiGetCars } from "../../redux/carsSlice";
import {
  selectCarError,
  selectCarIsLoading,
  selectCarItems,
} from "../../redux/carsSlice.selectors";
import { CardCars, Filter, Loader } from "components";
import { StyledMainPage } from "./Main.styled";
import { MainContainer } from "MainContainer.styled";
import {
  selectCarBrand,
  selectCarRental,
  selectMileageFrom,
  selectMileageTo,
} from "../../redux/filterSlice.selectors";

const Main = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectCarIsLoading);
  const error = useSelector(selectCarError);
  const cars = useSelector(selectCarItems);

  const carBrand = useSelector(selectCarBrand);
  const carRental = useSelector(selectCarRental);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const [page, setPage] = useState(1);
  const heandlerLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(apiGetCars(page));
  }, [dispatch, page]);

  // const filteredCars = cars?.filter(car => {
  //   if (carBrand) {
  //     return car.make === carBrand
  //   }
  //   return true
  // })

  const filteredCars = cars
    ?.filter((car) => {
      if (carBrand === null && carRental === null) {
        return true;
      }
      if (carBrand === null) {
        return (
          parseInt(car.rentalPrice.replace("$", ""), 10) >= 30 &&
          parseInt(car.rentalPrice.replace("$", ""), 10) <=
            parseInt(carRental, 10)
        );
      }
      if (carRental === null) {
        return car.make === carBrand;
      }
      return (
        car.make === carBrand &&
        parseInt(car.rentalPrice.replace("$", ""), 10) >= 30 &&
        parseInt(car.rentalPrice.replace("$", ""), 10) <=
          parseInt(carRental, 10)
      );
    })
    .filter((car) => {
      if (mileageFrom === null && mileageTo === null) {
        return true;
      }
      if (mileageFrom !== null && mileageTo !== null) {
        return (
          car.mileage <= parseInt(mileageTo, 10) &&
          car.mileage >= parseInt(mileageFrom, 10)
        );
      }

      if (mileageFrom === null) {
        return car.mileage <= parseInt(mileageTo, 10);
      }
      if (mileageTo === null) {
        return car.mileage >= parseInt(mileageFrom, 10);
      }
      return true;
    });

  return (
    <MainContainer>
      <StyledMainPage>
        {error && <p>{error}</p>}
        {isLoading && <Loader />}
        <div>
          <Filter />
        </div>

        <ul className="cars-list">
          {filteredCars?.map(
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
        {cars?.length !== null && (
          <button onClick={heandlerLoadMore} className="load-more">
            Load more
          </button>
        )}

        {/* {isLoading ? (
          <Loader />
        ) : (
          <button onClick={heandlerLoadMore} className="load-more">
            Load more
          </button>
        )} */}
      </StyledMainPage>
    </MainContainer>
  );
};

export default Main;