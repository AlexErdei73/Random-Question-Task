export function question(input) {
  const { a, b, x, y } = input;
  const c = a * x + b * y;
  const d = b * x + a * y;
  const lines = [];
  lines.push(
    `\\text{${a}kg of potatoes and ${b}kg of carrots have a total cost of ${c}p.}`
  );
  lines.push(
    `\\text{${b}kg of potatoes and ${a}kg of carrots have a total cost of ${d}p.}`
  );
  lines.push("");
  lines.push(
    "\\text{Work out the total cost of 1kg of potatoes and 1kg of carrots.}"
  );
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

export function answer(input) {
  const { a, b, x, y } = input;
  const c = a * x + b * y;
  const d = b * x + a * y;
  return Math.floor((c + d) / (a + b));
}

function randomInt(lowest, highest) {
  return lowest + Math.floor((highest - lowest + 1) * Math.random());
}

export function randomInteger(lowest, highest, excludedNumbers) {
  let result = randomInt(lowest, highest);
  while (excludedNumbers && excludedNumbers.indexOf(result) !== -1) {
    result = randomInt(lowest, highest);
  }
  return result;
}
