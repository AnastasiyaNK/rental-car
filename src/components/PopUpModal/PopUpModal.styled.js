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
    color: black;
    padding: 32px 24px;
    border-radius: 10px;
    font-size: 18px;
    line-height: 1.1;

    @media (min-width: 1440px) {
      width: 541px;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 592px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      width: 280px;
    }
  }

  .close-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 16px;
    right: 0;
    transform: translateX(-50%);
    z-index: 2;
    color: var(--black);
    transition: all 0.3s;
  }
  .closeModal {
    fill: currentColor;
  }
  .close-btn:hover,
  .close-btn:focus,
  .close-btn:active {
    color: var(--violet);
  }

  .card-title {
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
    font-weight: 400;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
  }
  .title-text {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: #121417;
  }
  .text {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #363535;

    border-radius: 35px;
    padding: 7px 14px;
    width: 133px;
    height: 32px;
    background: #f9f9f9;
  }

  .btn {
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    background: #3470ff;
    cursor: pointer;
    border: none;

    font-weight: 600;
    font-size: 14px;
    line-height: 1.43;
    color: #fff;

    .btn:hover,
    .btn:focus,
    .btn:active {
      background: #0b44cd;
      color: #fff;
    }
  }
`;
