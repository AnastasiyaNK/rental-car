import styled from "styled-components";
export const StyledLoaderBackdrop = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
  z-index: 10;
`;
