import styled from "styled-components";

export const StyledCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 426px;
  position: relative;

  .card-img {
    border-radius: 14px;
    width: 100%;
    height: 268px;
    object-fit: cover;
  }
  .heart-btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    top: 15px;
    right: 15px;
    transition: all 0.3s;
    width: 18px;
    height: 18px;
    padding: 0;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
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
  .card-price {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
  }

  .card-description {
    margin-top: 8px;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  .card-btn {
    display: inline-block;
    margin-top: 28px;
    width: 100%;
    padding: 12px 36px;
    height: 44px;
    justify-content: center;

    border-radius: 12px;
    background-color: #4c7fac;
    /* background-color: #3470ff; */
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

    &:active {
      box-shadow: none;
    }
  }
`;
