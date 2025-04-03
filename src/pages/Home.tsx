import React from "react";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Innotractor Assignments</h1>
      <p>Sarah Habibi</p>
      <div
        className={`${classes["btn-container"]} d-flex flex-column flex-md-row justify-content-center gap-5 p-5`}
      >
        <Link to={"/timer"}>
          <i className="bi bi-stopwatch"></i>
          <span>Timer</span>
        </Link>
        <Link to={"/calculate"}>
          <i className="bi bi-calculator"></i>
          <span>Calculation</span>
        </Link>
        <Link to={"/values"}>
          <i className="bi bi-list-columns-reverse"></i>
          <span>Values</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
