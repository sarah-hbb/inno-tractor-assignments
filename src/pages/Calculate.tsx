import React, { useState } from "react";
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
      setInputNumber("");
    }
  };
  return (
    <div className="w-100 d-flex flex-column align-items-center">
      <div className="p-3">
        {numbers.slice(-3).map((n, i) => (
          <span className="p-4" key={i}>
            {n}
          </span>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <input
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
        <div className="position-relative mt-4">
          <span
            className={`${classes["calculated-number"]} text-center position-absolute p-2 rounded-circle calculated-number`}
          >
            {numbers.slice(-3).reduce((acc, curr) => acc + curr, 0)}
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
