import React, { useRef, useState } from "react";
import CalcButton from "../CalcButton/CalcButton";
import CalcScreen from "../CalcScreen/CalcScreen";

import "./Calculator.scss";

const Calculator = () => {

  // const [isPlus, setIsPlus]=useState(false);
  // const [isMinus, setIsMinus]= useState(false);
  // const [isMulti, setIsMulti] = useState(false);
  // const [isDivided, setIsDivided] = useState(false);
  // const [isEqual, setIsEqual] = useState(false);

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
// debugger;
  
  const [isPushed, setIsPushed] = useState(false);
  const [myNumber, setMyNumber] =useState('');

   const numberClickHandler = (val) => {
     setIsPushed(true);
     console.log(isPushed); 
      // alert(val);
      setMyNumber(val);
      

     
   };
console.log(myNumber);
 
  return (
    <div className="calcBody">
      <CalcScreen backColor="darkgray" foreColor="green" value={myNumber} />
      <div className="row-form">
        {/* first row */}
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("1")}
          caption="1"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("2")}
          caption="2"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("3")}
          caption="3"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="green"
          onButtonClick={(val) => numberClickHandler("/")}
          caption="/"
        />
      </div>
      <div className="row-form">
        {/* second row */}
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("4")}
          caption="4"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("5")}
          caption="5"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("6")}
          caption="6"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="green"
          onButtonClick={(val) => numberClickHandler("*")}
          caption="*"
        />
      </div>
      <div className="row-form">
        {/* third row */}
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("7")}
          caption="7"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("8")}
          caption="8"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("9")}
          caption="9"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="green"
          onButtonClick={(val) => numberClickHandler("-")}
          caption="-"
        />
      </div>
      <div className="row-form">
        {/* forth row */}
        <CalcButton
          standardColor="lightgray"
          alternativeColor="orange"
          onButtonClick={(val) => numberClickHandler("")}
          caption="C"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={(val) => numberClickHandler("0")}
          caption="0"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="orange"
          onButtonClick={(val) => numberClickHandler("=")}
          caption="="
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="green"
          onButtonClick={(val) => numberClickHandler("+")}
          caption="+"
        />
      </div>
    </div>
  );
};

// };

export default Calculator;
