import React from "react";

import { StyledHome } from "./Home.styled";
import { MainContainer } from "MainContainer.styled";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "helpers/constants";

const Home = () => {
  return (
    <StyledHome>
      <MainContainer>
        <div className="home-wrapper">
          <ul className="home-lisst">
            <li className="home-item">
              We offer a wide selection of cars to suit any needs.
            </li>
            <li className="home-item">
              Our rental services are available in all cities to accommodate
              your rental requirements.
            </li>
            <li className="home-item">
              Enjoy convenient and affordable cars at any location.
            </li>
          </ul>
          <Link to={ROUTE_PATH.catalog} className="home-link">
            go to catalog
          </Link>
        </div>
      </MainContainer>
    </StyledHome>
  );
};

export default Home;
