import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [direction, setDirection] = useState({ dx: 2, dy: 2 });
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  const circleSize = 60;
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Circle movement
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      setPosition((prev) => {
        let newTop = prev.top + direction.dy;
        let newLeft = prev.left + direction.dx;

        // Bounce off edges
        if (newTop <= 0 || newTop + circleSize >= height) {
          setDirection((dir) => ({ ...dir, dy: -dir.dy }));
        }
        if (newLeft <= 0 || newLeft + circleSize >= width) {
          setDirection((dir) => ({ ...dir, dx: -dir.dx }));
        }

        return { top: newTop, left: newLeft };
      });
    }, 10);

    return () => clearInterval(interval);
  }, [direction, gameOver, width, height]);

  // Timer
  useEffect(() => {
    if (gameOver) return;
    if (timeLeft <= 0) {
      setGameOver(true);
      return;
    }

    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, gameOver]);

  const handleClick = () => setScore(score + 1);

  const restartGame = () => {
    setScore(0);
    setTimeLeft(15);
    setGameOver(false);
    setPosition({ top: 100, left: 100 });
    setDirection({ dx: 2, dy: 2 });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0d1b2a",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
        position: "relative",
        textAlign: "center",
        paddingTop: "20px",
      }}
    >
      <h1>🎯 Bouncing Circle Game</h1>
      <p>Click the bouncing circle to score points!</p>
      <p>Time Left: {timeLeft}s | Score: {score}</p>

      {gameOver ? (
        <div>
          <h2>Game Over! 🏆 Your Score: {score}</h2>
          <button
            onClick={restartGame}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              borderRadius: "8px",
              backgroundColor: "#ff4081",
              border: "none",
              color: "#fff",
            }}
          >
            Restart Game
          </button>
        </div>
      ) : (
        <div
          onClick={handleClick}
          style={{
            position: "absolute",
