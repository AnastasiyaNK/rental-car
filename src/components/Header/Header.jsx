import { ROUTE_PATH } from "helpers/constants";
import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { MainContainer } from "MainContainer.styled";
import CarImg from "assets/images/blueCar.png";

const Header = () => {
  return (
    <MainContainer>
      <StyledHeader>
        <div className="header-wrapper">
          <nav className="header-nav">
            <NavLink to={ROUTE_PATH.home}>
              <img className="test-logo" src={CarImg} alt="car"></img>
              {/* <span>rental car</span> */}
            </NavLink>
            <NavLink to={ROUTE_PATH.catalog} className="nav-text">
              catalog
            </NavLink>
            <NavLink to={ROUTE_PATH.favorites} className="nav-text">
              favorites
            </NavLink>
          </nav>
        </div>
      </StyledHeader>
    </MainContainer>
  );
};

export default Header;