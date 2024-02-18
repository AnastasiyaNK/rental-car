import styled from "styled-components";

export const StyledHeader = styled.header`
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
    border: 1.5px solid #3470ff;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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
    color: #121417;
    text-transform: uppercase;
    transition: all 0.3s;
    text-decoration: none;

    &.active {
      font-weight: 600;
      padding: 5px 15px;
      border-radius: 36px;
      background: #ecf2ff;
      color: black;
    }
  }
`;
