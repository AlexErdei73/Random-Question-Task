import MathInput from "../components/MathInput/MathInput";
import { useState } from "react";
import "../public/styles/globals.css";
import { evaluateTex } from "tex-math-parser";
import Question from "../components/Question/Question";
import Solution from "../components/Solution/Solution";
import { answer } from "../utilities/question";

export default function App({}) {
  const [memory, setMemory] = useState({});
  const [solutionShown, setSolutionShown] = useState(false);

  function addToMemory(newValue) {
    setMemory((prev) => {
      return { ...prev, ...newValue };
    });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          maxWidth: "800px",
          width: "calc(100vw - 40px)",
          marginTop: "50px",
        }}>
        <Question input={{ a: 3, b: 4, x: 80, y: 50 }} />
        <br />
        <br />
        {solutionShown ? <Solution input={{ a: 3, b: 4, x: 80, y: 50 }} /> : ""}
        <br />
        <br />
        <MathInput
          buttons={["power", "times"]}
          markingFunction={(userInput) =>
            markingFunction(userInput, answer({ a: 3, b: 4, x: 80, y: 50 }))
          }
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

function markingFunction(userInput, answer) {
  let inputValue;
  try {
    //the evaluateTex function takes a latex string as an input and returns the evaluation as a javascript number
    inputValue = evaluateTex(userInput).evaluated;
  } catch {
    return 0;
  }
  if (inputValue === answer) {
    return 1;
  } else {
    return 0;
  }
}
