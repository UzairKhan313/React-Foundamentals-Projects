import React, { useEffect } from "react";

const Timer = ({ dispatch, secondsRemainig }) => {
  const minutes = Math.floor(secondsRemainig / 60);
  const seconds = secondsRemainig % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
};

export default Timer;
