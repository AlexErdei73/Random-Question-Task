import { question } from "../../utilities/question";
import StaticMath from "../StaticMath/StaticMath";

const Question = (props) => {
  const { a, b, x, y } = props.input;

  const lines = question({ a, b, x, y });

  return lines.map((line, index) =>
    line ? (
      <StaticMath key={index} latex={`\\text{${line}}`} />
    ) : (
      <br key={index} />
    )
  );
};

export default Question;
