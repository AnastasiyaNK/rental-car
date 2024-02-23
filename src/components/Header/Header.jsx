import { ROUTE_PATH } from "helpers/constants";
import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Header.styled";
import { MainContainer } from "MainContainer.styled";
import CarImg from "assets/images/blueCar.png";

const Header = () => {
  return (
    <StyledHeader>
      <MainContainer>
        <div className="header-wrapper">
          <nav className="header-nav">
            <NavLink to={ROUTE_PATH.home}>
              <img className="test-logo" src={CarImg} alt="car"></img>
            </NavLink>
            <NavLink to={ROUTE_PATH.catalog} className="nav-text">
              catalog
            </NavLink>
            <NavLink to={ROUTE_PATH.favorites} className="nav-text">
              favorites
            </NavLink>
          </nav>
        </div>
      </MainContainer>
    </StyledHeader>
  );
};

export default Header;
