import React, { useState } from "react";
import CalcButton from "../CalcButton/CalcButton";
import CalcScreen from "../CalcScreen/CalcScreen";

import "./Calculator.scss";

const Calculator = () => {
  const errorMessage = "ERROR";
  const [expression, setExpression] = useState("");
  const [shouldBeCleaned, setShouldBeCleaned] = useState(false);

  const buttonClickHandler = (val) => {
    if (shouldBeCleaned === true) {
      setExpression(val);
      setShouldBeCleaned(false);
    } else {
      const temp = expression + val;
      setExpression(temp);
    }
  };

  //validating results
  const validateExpression = () => {
    if (isExpressionEmpty(expression)) {
      return false;
    }

    if (checkSignAmount(expression) !== 1) {
      return false;
    }
    // debugger;
    if (!hasEnoughMembers(expression)) {
      return false;
    }
    return true;
  };

  const isExpressionEmpty = () => {
    return !expression || expression === "";
  };

  const countCharakter = (exp, sign) => {
    let counter = 0;
    if (exp.includes(sign)) {
      for (let i = 0; i < exp.length; i++) {
        if (exp[i] === sign) {
          counter++;
        }
      }
    }
    return counter;
  };

  function checkSignAmount(exp) {
    return (
      countCharakter(exp, "-") +
      countCharakter(exp, "+") +
      countCharakter(exp, "*") +
      countCharakter(exp, "/")
    );
  }

  const checkExpressionSign = (exp) => {
    // debugger;
    if (exp.includes("+")) {
      return "+";
    } else if (exp.includes("-")) {
      return "-";
    } else if (exp.includes("*")) {
      return "*";
    } else if (exp.includes("/")) {
      return "/";
    }
    return undefined;
  };

  const hasEnoughMembers = (exp) => {
  //debugger
    let sign = checkExpressionSign(exp);
    const splittedExpression = exp.split(sign);
    return (
      splittedExpression.length === 2 &&
      splittedExpression[0] !== "" &&
      splittedExpression[1] !== ""
    );
  };

  //Counting
  //debugger;
  const resultClickHandler = () => {
    if (!validateExpression()) {
      setExpression(errorMessage);
      setShouldBeCleaned(true);
      return;
    }

    if (expression.includes("+")) {
      const numbers = expression.split("+");
      const sum = +numbers[0] + +numbers[1];
      const result = expression + "=" + sum;

      setExpression(result);
      // console.log(result);
      setShouldBeCleaned(true);
      return;
    } else if (expression.includes("-")) {
      const numbers = expression.split("-");
      const difference = +numbers[0] - +numbers[1];
      const result = expression + "=" + difference;
      setShouldBeCleaned(true);
      setExpression(result);
    } else if (expression.includes("*")) {
      const numbers = expression.split("*");
      const product = +numbers[0] * +numbers[1];
      const result = expression + "=" + product;
      setShouldBeCleaned(true);
      setExpression(result);
    } else if (expression.includes("/")) {
      const numbers = expression.split("/");
      const quotient = +numbers[0] / +numbers[1];

      if (+numbers[1] === 0) {
        setExpression(errorMessage);
        setShouldBeCleaned(true);
      } else {
        const result = expression + "=" + quotient;
        setShouldBeCleaned(true);
        setExpression(result);
      }
    }
  };

  const clearClickHandler = () => {
    setExpression("");
  };

  return (
    <div className="calcBody">
      <CalcScreen backColor="darkgray" foreColor="green" value={expression} />

      <div className="row-form">
        {/* first row */}
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("1")}
          caption="1"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("2")}
          caption="2"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("3")}
          caption="3"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="green"
          onButtonClick={() => buttonClickHandler("/")}
          caption="/"
        />
      </div>
      <div className="row-form">
        {/* second row */}
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("4")}
          caption="4"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("5")}
          caption="5"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("6")}
          caption="6"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="green"
          onButtonClick={() => buttonClickHandler("*")}
          caption="*"
        />
      </div>
      <div className="row-form">
        {/* third row */}
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("7")}
          caption="7"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("8")}
          caption="8"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("9")}
          caption="9"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="green"
          onButtonClick={() => buttonClickHandler("-")}
          caption="-"
        />
      </div>
      <div className="row-form">
        {/* forth row */}
        <CalcButton
          standardColor="lightgray"
          alternativeColor="orange"
          onButtonClick={() => clearClickHandler("")}
          caption="C"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="aqua"
          onButtonClick={() => buttonClickHandler("0")}
          caption="0"
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="orange"
          onButtonClick={() => resultClickHandler()}
          caption="="
        />
        <CalcButton
          standardColor="lightgray"
          alternativeColor="green"
          onButtonClick={() => buttonClickHandler("+")}
          caption="+"
        />
      </div>
    </div>
  );
};

// };

export default Calculator;
