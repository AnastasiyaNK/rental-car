import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;

  .header-wrapper {
    display: flex;
    width: 100%;
    height: 72px;
    padding: 14px 24px 13px 24px;

    align-items: center;
    border-radius: 5px;

    /* border-radius: 0px 0px 8px 8px; */
    border: 1.5px solid rgb(52, 112, 255);
  }
  .header-nav {
    display: flex;
    align-items: center;
    gap: 80px;
  }
  .nav-text {
    color: rgb(18, 20, 23);
    font-size: 14px;

    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    padding: 8px 16px;
    transition: all 0.3s;

    text-decoration: none;
  }
`;
