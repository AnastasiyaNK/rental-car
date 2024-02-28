import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #d4d4d8;
  display: flex;
  width: 100%;
  .test-logo {
    width: 112px;
    height: 50px;
  }
  .header-wrapper {
    display: flex;
    width: 100%;
    height: 72px;
    padding: 14px 24px 13px 24px;

    align-items: center;
    border-radius: 5px;
  }
  .header-nav {
    display: flex;
    align-items: center;
    gap: 80px;
  }
  .nav-text {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    color: #2e3f68;
    text-transform: uppercase;
    transition: all 0.3s;
    text-decoration: none;

    &.active {
      font-weight: 600;
      padding: 5px 15px;
      border-radius: 36px;
      background: #4c7fac;
      color: #fff;
    }
  }
`;
