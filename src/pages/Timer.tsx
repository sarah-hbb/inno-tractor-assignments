import React, { useEffect, useState } from "react";
import Indicators from "../components/Indicators";
import classes from "./Timer.module.css";

const Timer: React.FC = () => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [bgFlashing, setBgFlashing] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prvSecond) => prvSecond - 1);
        } else if (minutes > 0) {
          setMinutes((prvMinutes) => prvMinutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((prvHour) => prvHour - 1);
          setSeconds(59);
          setMinutes(59);
        }
        if (seconds === 0 && minutes === 0 && hours === 0) {
          setBgFlashing(true);
        }
      }, 1000);
    }

    // cleanup
    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes, hours]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleReset = () => {
    setIsRunning(false);
    setBgFlashing(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };
  return (
    <div
      className={`${
        bgFlashing ? classes["flashing"] : ""
      } w-100 p-5 d-flex flex-column justify-content-center align-items-center w-50 rounded-4`}
    >
      <div className="p-1 d-flex flex-column gap-3 w-50 ">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className={`btn bg-transparent text-lime ${classes.stopwatch}`}
        >
          <i className="bi bi-stopwatch"></i> Start timer
        </button>
        <button
          onClick={handleReset}
          className={`btn bg-transparent text-danger ${classes.stopwatch}`}
        >
          <i className="bi bi-stop"></i> Reset timer
        </button>
      </div>
      <div className="d-flex p-2 gap-2 fs-2 ">
        <Indicators
          label="hours"
          forHtml="hours"
          onChange={(v) => setHours(v)}
          value={hours}
          disabled={isRunning}
        />
        {":"}
        <Indicators
          label="minutes"
          forHtml="minutes"
          onChange={(v) => setMinutes(v)}
          value={minutes}
          disabled={isRunning}
        />
        {":"}
        <Indicators
          label="seconds"
          forHtml="seconds"
          onChange={(v) => setSeconds(v)}
          value={seconds}
          disabled={isRunning}
        />
      </div>
    </div>
  );
};

export default Timer;
