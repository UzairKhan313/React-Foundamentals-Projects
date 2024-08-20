import React from "react";

const StartScreen = ({ numOfQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Wellcome to the React Quiz</h2>
      <h3>{numOfQuestions} question to test your react mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "START" })}
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
