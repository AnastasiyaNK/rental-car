import styled from "styled-components";

export const StyledFilter = styled.form`
  display: flex;
  justify-content: center;
  column-gap: 18px;
  row-gap: 12px;
  padding-bottom: 24px;
  margin-top: 50px;

  .form-wrapper {
    align-items: start;
  }
  .label {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    color: #8a8a89;
    margin-bottom: 10px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
  }

  .input-from {
    border: none;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 14px 0 0 14px;
    background-color: #f7f7fb;
    max-width: 160px;
    height: 48px;
    padding-left: 24px;

    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;

    &:focus {
      outline-color: #3470ff;
    }

    &::placeholder {
      color: #121417;
    }
  }
  .input-to {
    border: none;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
    border-radius: 0 14px 14px 0;
    background-color: #f7f7fb;
    max-width: 160px;
    height: 48px;
    padding-left: 24px;

    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;

    &:focus {
      outline-color: #3470ff;
    }

    &::placeholder {
      color: #121417;
    }
  }
  .saerch-btn {
    width: 136px;
    padding: 14px;
    margin-top: auto;
    margin-bottom: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    border: transparent;
    border-radius: 12px;
    background: #4c7fac;
    cursor: pointer;
    transition: all 0.3s;

    &:hover,
    &:focus {
      background: #1e293b;
    }
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 126px 1fr;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 15px;
    grid-row-gap: 20px;
    .input-contaiter {
      display: flex;
    }
    .saerch-btn {
      grid-area: 2 / 3 / 3 / 4;
      margin-left: auto;
    }
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    padding-bottom: 0;

    .saerch-btn {
      width:100%;
      grid-area: auto;
    }
    .input-from {
      width: 100%;
      max-width: 100%;
    }
    .input-to {
      width: 100%;
      max-width: 100%;
    }
  }
`;
