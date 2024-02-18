import styled from "styled-components";

export const StylrdPopUpModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  z-index: 10;

  .pop-up-container {
    position: relative;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 24px;
    max-width: 541px;
  }

  .close-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 10px;
    right: -17px;
    transform: translateX(-50%);
    z-index: 2;
    color: var(--black);
    transition: all 0.3s;

    &:hover,
    &:focus,
    &:focus {
      fill: #0b44cd;
    }
  }

  .card-img {
    border-radius: 14px;
    width: 100%;
    object-fit: cover;
    height: 248px;
  }
  .card-title {
    margin-top: 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
  }
  .current-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #3470ff;
  }
  .card-description {
    margin-top: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  .main-description {
    margin-top: 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
  }
  .title-text {
    margin-top: 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
  }
  .card-description {
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }

  .btn {
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    background: #3470ff;
    cursor: pointer;
    border: none;
    margin-top: 24px;

    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    color: #fff;

    &:hover,
    &:focus {
      background: #0b44cd;
    }
  }
  .condition-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    gap: 8px;

    & p {
      padding: 7px 14px;
      border-radius: 35px;
      background: #f9f9f9;
      font-family: "Montserrat", sans-serif;
      color: #363535;
      font-size: 12px;
      line-height: calc(18 / 12);
      letter-spacing: -0.24px;
    }

    & span {
      color: #3470ff;
      font-weight: 600;
    }
  }
`;
