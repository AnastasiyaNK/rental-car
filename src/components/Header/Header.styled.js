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
    border: 1.5px solid #3470ff;
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
  }
`;
