import React, { useState } from "react";
import EmailSent from "./email-sent";
import ReactDOM from "react-dom";

import "./OptionSelector.css";

const OptionSelector = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleNextClick = () => {
    if (selectedOptions.length === 0) {
      alert("At least select one button.");
    } else {
      ReactDOM.render(<EmailSent />, document.getElementById("root"));
    }
  };

  return (
    <div id="option-container">
      <h1 className="option-head"> What brings you to Dribbble? </h1>
      <p style={{ marginBottom: "10%" }}>
        {" "}
        Select the options that best describe you. Don't worry, you can explore
        other options later.{" "}
      </p>
      <div>
        <button
          className={
            selectedOptions.includes("I'm a designer looking to share my work")
              ? "selected"
              : ""
          }
          onClick={() =>
            handleOptionSelect("I'm a designer looking to share my work")
          }
        >
          I'm a designer looking to share my work
        </button>

        <button
          className={
            selectedOptions.includes("I'm looking to hire a designer")
              ? "selected"
              : ""
          }
          onClick={() => handleOptionSelect("I'm looking to hire a designer")}
        >
          I'm looking to hire a designer
        </button>

        <button
          className={
            selectedOptions.includes("I'm looking for design inspiration")
              ? "selected"
              : ""
          }
          onClick={() =>
            handleOptionSelect("I'm looking for design inspiration")
          }
        >
          I'm looking for design inspiration
        </button>
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default OptionSelector;
