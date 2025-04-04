import React, { useEffect, useState } from "react";
import classes from "./Calculation.module.css";

const Calculate: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputNumber, setInputNumber] = useState<number | "">("");
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const [valid, setIsValid] = useState<boolean>(false);

  // Assumed numbers > 50 and < 0 are invalid

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = Math.floor(Number(e.target.value));
    if (!Boolean(input) && e.target.value !== "") return;
    if (Number(e.target.value) > 50 || Number(e.target.value) < 0) {
      setInvalidError(true);
      setIsValid(false);
    } else {
      setInvalidError(false);
      setIsValid(true);
      setInputNumber(Number(e.target.value));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputNumber && !invalidError) {
      setNumbers((prvNumbers) => [...prvNumbers, inputNumber]);
      setIsValid(false);
      setInvalidError(false);
      setInputNumber("");
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
            value={inputNumber}
          />
          {invalidError && (
            <p className="text-danger ">
              The entered number should be between 0 and 50
            </p>
          )}
          {valid && <p className="text-success">The entered number is valid</p>}
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
