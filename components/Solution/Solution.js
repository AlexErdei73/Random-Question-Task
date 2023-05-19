import { solution } from "../../utilities/question";
import StaticMath from "../StaticMath/StaticMath";

const Solution = (props) => {
  const lines = solution(props.params);

  return lines.map((line, index) =>
    line ? <StaticMath key={index} latex={line} /> : <br key={index} />
  );
};

export default Solution;
