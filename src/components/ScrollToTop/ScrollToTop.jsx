import { HiChevronDoubleUp } from "react-icons/hi";
import { StyledScroll } from "./ScrollToTop.styled";

const ScrollToTop = ({ visibleButton, onScroll }) => {
  return (
    <StyledScroll className={visibleButton ? "visible" : ""} onClick={onScroll}>
      <HiChevronDoubleUp className="scroll-icon" />
    </StyledScroll>
  );
};

export default ScrollToTop;
