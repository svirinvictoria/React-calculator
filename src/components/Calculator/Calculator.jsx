import React, {useState} from "react";
import CalcButton from "../CalcButton/CalcButton";
import CalcScreen from "../CalcScreen/CalcScreen";

import "./Calculator.scss";

const Calculator =()=> {
    const [isPushed, setIsPushed]=useState(false)
    const [isPlus, setIsPlus]=useState(false);
    const [isMinus, setIsMinus]= useState(false);
    const [isMulti, setIsMulti] = useState(false);
    const [isDivided, setIsDivided] = useState(false);
    const [isEqual, setIsEqual] = useState(false);

    // const plusSign = (a, b)=>{
    //     setIsPlus(true);
    //     // if(isPlus===true && isEqual===true) {
    //     //     return (a+b)
    //     // }
    // }

    // const minusSign = (a,b) => {
    //     setIsMinus(true);
    //     // if(isMinus===true && isEqual===true) {
    //     // return (a-b)
    //     // }
    // }

    // const multiplicationSign = (a, b) => {
    //     setIsMulti(true);
    //     // if (isMulti === true && isEqual === true) {
    //     //   return a * b;
    //     // }
    // }

    // const divisionSign = (a, b) => {
    //     setIsDivided(true);
    // //     if (b!==0) {
    // //         return a/b
    // //     } else {
    // //         return -1}
    // // }

    // const cleanScreen =()=>{

    // }
    let currentNumber;
    const numberClickHandler =(event)=>{
        setIsPushed(true);
        currentNumber = event.target.value;

    }

    return (
      <div className="calcBody">
        <CalcScreen backColor="darkgray" foreColor="green" value={currentNumber}/>
        <div className="row-form">
          {/* first row */}
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={numberClickHandler}
            caption="1"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="2"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="3"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="green"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="/"
          />
        </div>
        <div className="row-form">
          {/* second row */}
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="4"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="5"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="6"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="green"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="*"
          />
        </div>
        <div className="row-form">
          {/* third row */}
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="7"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="8"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="9"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="green"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="-"
          />
        </div>
        <div className="row-form">
          {/* forth row */}
          <CalcButton
            standardColor="lightgray"
            alternativeColor="orange"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="C"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="aqua"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="0"
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="orange"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="="
          />
          <CalcButton
            standardColor="lightgray"
            alternativeColor="green"
            onButtonClick={() => {
              alert("HELLO");
            }}
            caption="+"
          />
        </div>
      </div>
    );
    // };

};

export default Calculator;