export function question(input) {
  const { a, b, x, y } = input;
  const c = a * x + b * y;
  const d = b * x + a * y;
  const lines = [];
  lines.push(
    `${a}kg of potatoes an ${b}kg of carrots have a total coast of ${c}p.`
  );
  lines.push(
    `${b}kg of potatoes an ${a}kg of carrots have a total coast of ${d}p.`
  );
  lines.push("");
  lines.push("Work out the total coast of 1kg of potatoes and 1kg of carrots.");
  return lines;
}
