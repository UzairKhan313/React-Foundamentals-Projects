import React from "react";

const Progress = ({
  currentQuestion,
  totalQuestion,
  pionts,
  totalPionts,
  answer,
}) => {
  return (
    <header className="progress">
      <progress
        max={totalQuestion}
        value={currentQuestion + Number(answer !== null)}
      />
      <p>
        Question <strong>{currentQuestion + 1}</strong> / {totalQuestion}
      </p>
      <p>
        <strong>{pionts}</strong> / {totalPionts}
      </p>
    </header>
  );
};

export default Progress;
