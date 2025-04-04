import React, { useEffect, useState } from "react";
import classes from "./Calculation.module.css";

const Calculate: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [input, setInput] = useState<string>("");
  const [valid, setIsValid] = useState<boolean>(false);
  const [showValidation, setShowValidation] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowValidation(true);
    setInput(e.target.value);
    if (!Number(e.target.value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input && valid) {
      const inputNumber = Math.floor(Number(input));
      setNumbers((prvNumbers) => [...prvNumbers, inputNumber]);
      setIsValid(false);
      setShowValidation(false);
      setInput("");
    }
  };

  const slicedNumbers = numbers.slice(-3);
  const value = slicedNumbers.reduce((acc, curr) => acc + curr, 0);

  return (
    <div
      className={`${classes["container"]} p-5 w-100 d-flex flex-column align-items-center`}
    >
      {slicedNumbers.length !== 0 && (
        <div className="p-3 d-flex">
          {numbers.length !== 0 &&
            numbers.slice(-3).map((n, i) => (
              <div className="p-4" key={i}>
                {n}
              </div>
            ))}
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`${classes["form"]} w-100 d-flex flex-column justify-content-between align-items-center`}
      >
        <div className="d-flex flex-column align-items-center">
          <input
            type="text"
            className="rounded-2 p-2 text-center"
            onChange={handleChange}
            value={input}
          />
          {showValidation && (
            <p className={`${valid ? "text-success" : "text-danger"}`}>
              {valid
                ? "The input is valid"
                : "The input should be a valid number!"}
            </p>
          )}
        </div>
        <div className="position-relative mt-4">
          <span
            className={`${classes["calculated-number"]} 
            ${
              value > 25
                ? classes["bg-purple"]
                : value < 10
                ? classes["bg-green"]
                : ""
            }
            text-center position-absolute p-2 rounded-circle calculated-number`}
          >
            {value}{" "}
          </span>
          <button type="submit" className="btn btn-secondary">
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculate;
