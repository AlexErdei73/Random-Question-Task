import MathInput from "../components/MathInput/MathInput";
import { useState } from "react";
import "../public/styles/globals.css";
import { evaluateTex } from "tex-math-parser";
import Question from "../components/Question/Question";
import Solution from "../components/Solution/Solution";
import { answer, randomInput } from "../utilities/question";

export default function App({}) {
  const [memory, setMemory] = useState({});
  const [solutionShown, setSolutionShown] = useState(false);

  const [questionParams, setQuestionParams] = useState(randomInput());

  function addToMemory(newValue) {
    setMemory((prev) => {
      return { ...prev, ...newValue };
    });
  }

  function markingFunction(userInput) {
    let inputValue;
    try {
      //the evaluateTex function takes a latex string as an input and returns the evaluation as a javascript number
      inputValue = evaluateTex(userInput).evaluated;
    } catch {
      return 0;
    }
    if (inputValue === answer(questionParams)) {
      return 1;
    } else {
      return 0;
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          maxWidth: "800px",
          width: "calc(100vw - 40px)",
          marginTop: "50px",
        }}>
        <Question input={questionParams} />
        <br />
        <br />
        {solutionShown ? <Solution input={questionParams} /> : ""}
        <br />
        <br />
        <MathInput
          buttons={["power", "times"]}
          markingFunction={markingFunction}
          memKey="mathinput1"
          memory={memory}
          setMemory={addToMemory}
          placeholder="Type your answer here!"
        />
        <br />
        <br />
        <button
          onClick={() => {
            setMemory((prev) => {
              return { ...prev, feedbackShown: true };
            });
          }}>
          Check Answer
        </button>
        <br />
        {!solutionShown ? (
          <button
            style={{ marginTop: "20px" }}
            onClick={() => {
              setSolutionShown(true);
            }}>
            Show Solution
          </button>
        ) : (
          ""
        )}
        {solutionShown ? (
          <button
            style={{ marginTop: "20px" }}
            onClick={() => {
              setSolutionShown(false);
            }}>
            Hide Solution
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
