import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [number, setNumber] = useState(0);
  const [value, setValue] = useState(1);

  const increase = () => {
    setNumber(number + Number(value));
  };
  const decrease = () => {
    setNumber(number - Number(value));
  };

  return (
    <div className="App">
      <div>
        <h1>Counter</h1>
        <p style={{ fontSize: "3rem", fontWeight: "700" }}>{number}</p>
        <button
          style={{
            border: "1px solid black",
            height: "2rem",
            width: "3rem",
            backgroundColor: "#87CEFA",
          }}
          onClick={decrease}
        >
          -
        </button>
        <button
          style={{
            border: "1px solid black",
            height: "2rem",
            width: "3rem",
            backgroundColor: "#87CEFA",
          }}
          onClick={increase}
        >
          +
        </button>
        <br />
        <label>increase or decrease by : </label>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {/* <Home/> */}
    </div>
  );
}

export default App;
