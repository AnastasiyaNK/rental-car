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
    padding: 80px 20px 20px;
    max-width: 446px;
  }
  .home-item {
    font-weight: 500;
    font-size: 22px;
    line-height: 1%.11;
    color: #fff;
    margin-bottom: 8px;
  }
  .img-logo {
    object-fit: contain;
    border-radius: 20px;
    border: 1.5px solid #407bff;
  }
  .home-link {
    display: inline-block;

    padding: 12px 36px;
    height: 44px;
    justify-content: center;
    text-decoration: none;
    margin-left: 20px;

    border-radius: 12px;
    background-color: #4c7fac;

    cursor: pointer;
    border: none;

    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    color: #fff;

    &:hover {
      background-color: #1e293b;
    }
  }
`;
