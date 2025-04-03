import React, { useState } from "react";

const Values: React.FC = () => {
  const [reveal, setReveal] = useState<boolean>(false);
  const inputs = ["42", "1e3", "1.222", null, undefined, "-12"];
  const values = () => {
    let result;
    result = inputs
      .filter((el) => Boolean(Number(el)))
      .map((el) => {
        let elWithoutDot = el?.replace(/\./g, "");
        return Number(elWithoutDot);
      })
      .reduce((acc, curr) => acc + curr, 0);
    return result;
  };
  return (
    <div>
      <h3>Click to reveal the result of the sum of the array elements</h3>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => {
          setReveal(true);
        }}
      >
        {" "}
        Result
      </button>
      <div
        className={`text-center p-5 fs-1 text-lime fw-bold ${
          reveal ? "show" : "fade"
        }`}
      >
        {values()}
      </div>
    </div>
  );
};

export default Values;
