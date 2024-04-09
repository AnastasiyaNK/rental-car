import styled from "styled-components";
import homeImg from "assets/images/bmw.jpeg";

export const StyledHome = styled.div`
  background-image: url(${homeImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 72px);

  padding-top: 40px;
  padding-bottom: 40px;

  .home-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;

    width: fit-content;
  }
  .home-lisst {
    padding: 25px 20px 20px 40px;
    max-width: 446px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-top: 60px;
  }
  .home-item {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.11;
    color: #fff;
    margin-bottom: 8px;
    &:last-child {
      list-style-type: none;
      padding-top: 15px;
      margin-bottom: 0;
    }
  }
  .img-logo {
    object-fit: contain;
    border-radius: 20px;
    border: 1.5px solid #407bff;
  }
  .home-link {
    display: inline-block;

    padding: 12px 36px;

    justify-content: center;
    text-decoration: none;

    border-radius: 12px;
    background-color: #4c7fac;

    cursor: pointer;
    border: none;

    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.43;
    color: #fff;
    text-transform: uppercase;

    &:hover {
      background-color: #1e293b;
    }
  }
  @media screen and (max-width: 768px) {
    .home-lisst {
      max-width: 394px;
    }
    .home-item {
      font-size: 18px;
    }
    .home-link {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 425px) {
    background-position: -770px;
  }
`;
