import React from "react";
import './CalcScreen.scss'

const CalcScreen =(props)=> {
 
    return (
      <div className={props.backColor + " screenForm"}>
        <div className={props.foreColor +" fontType"}>
          {props.value}
        </div>
      </div>
      
    );   
};

export default CalcScreen;