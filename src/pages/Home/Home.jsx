import React from "react";

import { StyledHome } from "./Home.styled";
import { MainContainer } from "MainContainer.styled";

const Home = () => {
  return (
    <StyledHome>
      <MainContainer>
        <div className="home-wrapper">
          <ul className="home-lisst">
            <li className="home-item">Wide selection of cars for any needs.</li>
            <li className="home-item">
              Availability in all cities to meet your rental needs.
            </li>
            <li className="home-item">
              Convenient and affordable cars in any location
            </li>
            <li className="home-item">
              Simple rental process for maximum customer convenience.
            </li>
            <li className="home-item">
              Our rental network covers every corner of the country.
            </li>
            <li className="home-item">
              Affordable rates and flexible rental terms
            </li>
            <li className="home-item">
              Wide selection of cars of different classes and brands for every
              customer.
            </li>
            <li className="home-item">
              Transparent and fast car booking process online or by phone.
            </li>
            <li className="home-item">
              24/7 support for all our customers to ensure a safe and
              comfortable journey.
            </li>
            <li className="home-item">
              Our mission is to make the car rental process easy and enjoyable
              for everyone.
            </li>
          </ul>
        </div>
      </MainContainer>
    </StyledHome>
  );
};

export default Home;
