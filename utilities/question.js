export function question(input) {
  const { a, b, x, y } = input;
  const c = a * x + b * y;
  const d = b * x + a * y;
  const lines = [];
  lines.push(
    `${a}kg of potatoes and ${b}kg of carrots have a total coast of ${c}p.`
  );
  lines.push(
    `${b}kg of potatoes and ${a}kg of carrots have a total coast of ${d}p.`
  );
  lines.push("");
  lines.push("Work out the total coast of 1kg of potatoes and 1kg of carrots.");
  return lines;
}

export function solution(input) {
  const { a, b, x, y } = input;
  const c = a * x + b * y;
  const d = b * x + a * y;
  const answer = Math.floor((c + d) / (a + b));
  const lines = [];
  lines.push(
    "\\text{If x is the cost of 1kg of potatoes and y is the cost of 1kg of carrots}"
  );
  lines.push(`${a}x + ${b}y = ${c}`);
  lines.push(`${b}x + ${a}y = ${d}`);
  lines.push("\\text{Add up the equations to get}");
  lines.push(`${a + b}x + ${a + b}y = ${c + d}`);
  lines.push(`\\text{Divide both sides by}${a + b}`);
  lines.push(`x + y = ${answer}`);
  lines.push(
    `\\text{1kg of potatoes and 1kg of carrots have a total cost of ${answer}p.}`
  );
  return lines;
}
