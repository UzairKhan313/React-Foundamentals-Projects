import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";

const initialState = {
  questions: [],
  currentQuestion: 0,
  status: "loading", // state of the quiz laoding, error, ready, active, finished.
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemainig: null,
};

const SEC_PER_QUES = 30;

const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        secondsRemainig: state.questions.length * SEC_PER_QUES,
      };
    case "ERROR":
      return {
        ...state,
        status: "error",
      };
    case "START":
      return {
        ...state,
        status: "active",
      };
    case "NEW_ANSWER": {
      // Getting the current Question.
      const currQuestion = state.questions.at(state.currQuestion);

      return {
        ...state,
        answer: action.payload,
        // comparing the correct Option with answer we received.
        points:
          action.payload === currQuestion.correctOption
            ? state.points + currQuestion.points
            : state.points,
      };
    }
    case "NEXT_QUESTION": {
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answer: null,
      };
    }
    case "FINISH":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "RESTART":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
      };
    case "TICK": {
      return {
        ...state,
        secondsRemainig: state.secondsRemainig - 1,
        status: state.secondsRemainig === 0 ? "finished" : state.status,
      };
    }
    default:
      throw new Error("Unknown Action");
  }
};

const App = () => {
  const [
    {
      questions,
      currentQuestion,
      status,
      answer,
      points,
      highScore,
      secondsRemainig,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxPossiblePionts = questions.reduce(
    (acc, curr) => acc + curr.points,
    0
  );

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "DATA_RECEIVED", payload: data }))
      .catch((error) => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numOfQuestions={questions.length} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              currentQuestion={currentQuestion}
              totalQuestion={questions.length}
              pionts={points}
              totalPionts={maxPossiblePionts}
              answer={answer}
            />
            <Question
              question={questions[currentQuestion]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <Timer dispatch={dispatch} secondsRemainig={secondsRemainig} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                totalQuestion={questions.length}
                currQuestion={currentQuestion}
              />
            </Footer>
          </>
        )}

        {status === "finished" && (
          <FinishScreen
            score={points}
            maxPossiblePionts={maxPossiblePionts}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
};

export default App;
