import { solution } from "../../utilities/question";
import StaticMath from "../StaticMath/StaticMath";

const Solution = (props) => {
  const { a, b, x, y } = props.input;

  const lines = solution({ a, b, x, y });

  return lines.map((line, index) =>
    line ? (
      <StaticMath key={index} latex={`\\text{${line}}`} />
    ) : (
      <br key={index} />
    )
  );
};

export default Solution;
