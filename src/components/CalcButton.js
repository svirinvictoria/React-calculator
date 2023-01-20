import React, { useState } from "react";
import "./CalcButton.css";

const CalcButton = (props) => {
  const [currentClass, setCurrentClass] = useState(props.standardClass);

  const mouseEnterHandler = () => {
    setCurrentClass(props.alternativeClass);
  };

  const mouseLeaveHandler = () => {
    setCurrentClass(props.standardClass);
  };

  return (
    <button
      className="btn-body"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="caption"> XXX</div>
      <div className={currentClass + " btn-stripe"}></div>
    </button>
  );
};

export default CalcButton;
