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
`;
