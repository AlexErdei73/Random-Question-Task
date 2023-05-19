import { question } from "../../utilities/question";
import StaticMath from "../StaticMath/StaticMath";

const Question = (props) => {
  const lines = question(props.params);

  return lines.map((line, index) =>
    line ? <StaticMath key={index} latex={line} /> : <br key={index} />
  );
};

export default Question;
