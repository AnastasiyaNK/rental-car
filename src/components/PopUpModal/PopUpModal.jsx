import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const PopUpModal = () => {
  const dispatch = useDispatch();

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      //   dispatch(closeModals());
    }
  };

  useEffect(() => {
    const handleEscapeClick = (event) => {
      if (event.code === "Escape") {
        // dispatch(closeModals());
      }
    };

    document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", handleEscapeClick);

    return () => {
      window.removeEventListener("keydown", handleEscapeClick);
      document.body.style.overflowY = "visible";
    };
  }, [dispatch]);
  return <div>PopUpModal</div>;
};

export default PopUpModal;
