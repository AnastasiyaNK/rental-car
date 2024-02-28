import styled from "styled-components";
export const StyledScroll = styled.button`
  position: fixed;
  bottom: 30px;
  right: 18px;
  background-color: #4c7fac;
  border: none;
  color: #fff;
  border-radius: 50%;
  transform: translateX(100px);
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  &.visible {
    transform: translateX(0);
    opacity: 1;
  }
  .scroll-icon {
    width: 23px;
    height: 23px;
  }
`;
