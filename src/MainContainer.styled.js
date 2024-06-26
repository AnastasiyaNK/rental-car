import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    max-width: 1214px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
