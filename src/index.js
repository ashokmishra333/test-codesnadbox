import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function useCounter(initalizeValue = 1) {
  const [count, setCount] = useState(initalizeValue);
  useCallback(()=>{
    setCount(initalizeValue)
  }, [initalizeValue])
  return {
    count,
    setCount
  };
}

function App() {
  const { count, setCount } = useCounter(4);

  return (
    <div className="App">
      <ul>
        {Array.from({ length: count }).map((c, i) => (
          <li key={i}>
            <span role="img" ariallabel="cup">
              {" "}
              ☕️
            </span>
          </li>
        ))}
      </ul>
      <div className="buttonContainer">
        <button onClick={() => setCount(count + 1)}>More coffee</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
