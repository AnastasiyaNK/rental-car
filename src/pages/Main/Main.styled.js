import styled from "styled-components";

export const StyledMainPage = styled.div`
  .cars-list {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 29px;
    grid-row-gap: 50px;
  }

  .load-more {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #3470ff;
    background-color: transparent;
    border: none;
    margin: 0 auto;
    display: block;

    margin-top: 100px;
    margin-bottom: 100px;
  }
  .notification {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.11;
    color: #2e3f68;
    text-align: center;

    transition: all 0.3s;
    text-decoration: none;
    margin-top: 20px;

    &.favorite {
      margin-top: 40px;
    }
  }
`;
