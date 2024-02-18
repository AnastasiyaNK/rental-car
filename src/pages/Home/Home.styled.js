import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;

  .home-wrapper {
    background-color: #ecf2ff;
    border-radius: 20px;

    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .home-lisst {
    padding: 40px;
    max-width: 520px;
  }
  .home-item {
    font-weight: 500;
    font-size: 18px;
    line-height: 1%.11;
    color: #121417;
    margin-bottom: 8px;
  }
  .img-logo {
    object-fit: contain;
    border-radius: 20px;
    border: 1.5px solid #407bff;
  }
`;
