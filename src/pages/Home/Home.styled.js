import styled from "styled-components";
import homeImg from "assets/images/bg-car.jpg";

export const StyledHome = styled.div`
  background-image: url(${homeImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 72px);

  padding-top: 40px;
  padding-bottom: 40px;

  .home-wrapper {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 20px;
    width: fit-content;
  }
  .home-lisst {
    padding: 40px;
    max-width: 520px;
  }
  .home-item {
    font-weight: 500;
    font-size: 18px;
    line-height: 1%.11;
    color: #fff;
    margin-bottom: 8px;
  }
  .img-logo {
    object-fit: contain;
    border-radius: 20px;
    border: 1.5px solid #407bff;
  }
`;
