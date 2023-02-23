import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(initialTime);
  };

  const handleSetTime = (event) => {
    const newTime = parseInt(event.target.value);
    setIsRunning(false);
    setTime(newTime);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1>{formatTime(time)}</h1>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary" onClick={handleStart}>
          Start
        </button>
        <button className="btn btn-primary" onClick={handlePause}>
          Pause
        </button>
        <button className="btn btn-primary" onClick={handleReset}>
          Reset
        </button>
      </div>
      <input
        className="form-input"
        type="number"
        value={time}
        onChange={handleSetTime}
      />
    </div>
  );
};

export default CountdownTimer;
