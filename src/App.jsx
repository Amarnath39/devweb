import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ top: 100, left: 100 });

  // Move box randomly every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const top = Math.floor(Math.random() * 300) + 50;
      const left = Math.floor(Math.random() * 500) + 50;
      setPosition({ top, left });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setScore(score + 1);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>🎯 Click the Moving Box Game!</h1>
      <p>Score points by clicking the moving box!</p>
      <p>Score: {score}</p>

      <div
        onClick={handleClick}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          width: "60px",
          height: "60px",
          backgroundColor: "red",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      ></div>

      <p className="read-the-docs">
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;

