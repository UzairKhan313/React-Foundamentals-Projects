import React from "react";

const NextButton = ({ dispatch, answer, currQuestion, totalQuestion }) => {
  if (answer === null) return null;

  if (currQuestion < totalQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
      >
        Next
      </button>
    );
  }

  if (currQuestion === totalQuestion - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "FINISH" })}
      >
        Finish
      </button>
    );
  }
};

export default NextButton;
