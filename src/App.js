import React, { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
;

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly className="display" />
        <div className="buttons">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((val) => (
            <button
              key={val}
              onClick={() => (val === "=" ? handleEqual() : handleClick(val))}
            >
              {val}
            </button>
          ))}
          <button className="clear" onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
}

  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {[1,2,3,"+",4,5,6,"-",7,8,9,"*",0,".","=","/"].map((val, index) => (
            <button key={index} onClick={() => val === "=" ? handleEqual() : handleClick(val)}>{val}</button>
          ))}
          <button onClick={handleClear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
