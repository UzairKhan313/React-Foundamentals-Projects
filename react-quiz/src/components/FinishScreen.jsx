import React from "react";

const FinishScreen = ({ score, maxPossiblePionts, highScore, dispatch }) => {
  const percentage = (score / maxPossiblePionts) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Score <strong>{score}</strong> out of{" "}
        {maxPossiblePionts} ({Math.ceil(percentage)}%)
      </p>
      <p className="high-score">(High Score : {highScore} )</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "RESTART" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
