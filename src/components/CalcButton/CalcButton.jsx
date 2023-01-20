import React, { useState } from "react";
import "./CalcButton.scss";

const CalcButton = (props) => {
  const [currentClass, setCurrentClass] = useState(props.standardColor);

  const mouseEnterHandler = () => {
    setCurrentClass(props.alternativeColor);
  };

  const mouseLeaveHandler = () => {
    setCurrentClass(props.standardColor);
  };

  return (
    <button
      className="btn-body"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={props.onButtonClick}
    >
      <div className="caption"> {props.caption}</div>
      <div className={currentClass + " btn-stripe"}></div>
    </button>
  );
};

export default CalcButton;
