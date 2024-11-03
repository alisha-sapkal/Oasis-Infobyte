// src/components/Calculator.jsx
import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import "./Calculator.css";

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);
  const [calculation, setCalculation] = useState(""); // Track full calculation

  const clearDisplay = () => {
    setCurrentInput("0");
    setOperator(null);
    setFirstOperand(null);
    setCalculation("");
  };

  const appendNumber = (number) => {
    if (currentInput === "0" && number !== ".") {
      setCurrentInput(number);
    } else {
      setCurrentInput(currentInput + number);
    }
    setCalculation(calculation + number); // Update calculation display
  };

  const appendOperator = (op) => {
    if (firstOperand === null) {
      setFirstOperand(parseFloat(currentInput));
    } else if (operator) {
      setFirstOperand(operate(firstOperand, parseFloat(currentInput), operator));
    }
    setOperator(op);
    setCalculation(calculation + " " + op + " "); // Add operator to calculation display
    setCurrentInput("0");
  };

  const calculate = () => {
    if (operator && firstOperand !== null) {
      const result = operate(firstOperand, parseFloat(currentInput), operator);
      setCurrentInput(result.toString());
      setOperator(null);
      setFirstOperand(null);
      setCalculation(calculation + " = " + result); // Show full calculation
    }
  };

  const operate = (a, b, op) => {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "*": return a * b;
      case "/": return b === 0 ? "Error" : a / b;
      default: return b;
    }
  };

  return (
    <div className="calculator">
      <Display value={currentInput} calculation={calculation} />
      <div className="buttons">
        <Button label="C" onClick={clearDisplay} />
        <Button label="÷" onClick={() => appendOperator("/")} />
        <Button label="×" onClick={() => appendOperator("*")} />
        <Button label="−" onClick={() => appendOperator("-")} />
        <Button label="7" onClick={() => appendNumber("7")} />
        <Button label="8" onClick={() => appendNumber("8")} />
        <Button label="9" onClick={() => appendNumber("9")} />
        <Button label="+" onClick={() => appendOperator("+")} />
        <Button label="4" onClick={() => appendNumber("4")} />
        <Button label="5" onClick={() => appendNumber("5")} />
        <Button label="6" onClick={() => appendNumber("6")} />
        <Button label="1" onClick={() => appendNumber("1")} />
        <Button label="2" onClick={() => appendNumber("2")} />
        <Button label="3" onClick={() => appendNumber("3")} />
        <Button label="=" onClick={calculate} />
        <Button label="0" onClick={() => appendNumber("0")} className="zero" />
        <Button label="." onClick={() => appendNumber(".")} />
      </div>
    </div>
  );
};

export default Calculator;
