const ITEMS = {
  potatoes: {
    text: "kg of potatoes",
    unitPrices: [55, 60, 75, 80, 90],
    matchingItems: ["carrots"],
  },
  carrots: {
    text: "kg of carrots",
    unitPrices: [40, 45, 50, 60],
    matchingItems: ["potatoes"],
  },
};

export function question(params) {
  const { input, textA, textB } = params;
  const { a, b, x, y } = input;
  const c = a * x + b * y;
  const d = b * x + a * y;
  const lines = [];
  lines.push(
    `\\text{${a}${textA} and ${b}${textB} have a total cost of ${c}p.}`
  );
  lines.push(
    `\\text{${b}${textA} and ${a}${textB} have a total cost of ${d}p.}`
  );
  lines.push("");
  lines.push(`\\text{Work out the total cost of 1${textA} and 1${textB}.}`);
  return lines;
}

export function solution(params) {
  const { input, textA, textB } = params;
  const { a, b, x, y } = input;
  const c = a * x + b * y;
  const d = b * x + a * y;
  const answer = Math.floor((c + d) / (a + b));
  const lines = [];
  lines.push(
    `\\text{If x is the cost of 1${textA} and y is the cost of 1${textB}}`
  );
  lines.push(`${a}x + ${b}y = ${c}`);
  lines.push(`${b}x + ${a}y = ${d}`);
  lines.push("\\text{Add up the equations to get}");
  lines.push(`${a + b}x + ${a + b}y = ${c + d}`);
  lines.push(`\\text{Divide both sides by}${a + b}`);
  lines.push(`x + y = ${answer}`);
  lines.push(
    `\\text{1${textA} and 1${textB} have a total cost of ${answer}p.}`
  );
  return lines;
}

export function answer(params) {
  const { a, b, x, y } = params.input;
  const c = a * x + b * y;
  const d = b * x + a * y;
  return Math.floor((c + d) / (a + b));
}

function randomInt(lowest, highest) {
  return lowest + Math.floor((highest - lowest + 1) * Math.random());
}

function randomInteger(lowest, highest, excludedNumbers) {
  let result = randomInt(lowest, highest);
  while (excludedNumbers && excludedNumbers.indexOf(result) !== -1) {
    result = randomInt(lowest, highest);
  }
  return result;
}

export function randomInput() {
  const a = randomInteger(2, 9);
  const b = randomInteger(2, 9, [a]);
  const itemKeys = Object.keys(ITEMS);
  const itemA = ITEMS[itemKeys[randomInt(0, itemKeys.length - 1)]];
  const matchingItems = itemA.matchingItems;
  const itemB = ITEMS[matchingItems[randomInt(0, matchingItems.length - 1)]];
  const x = itemA.unitPrices[randomInt(0, itemA.unitPrices.length - 1)];
  const y = itemB.unitPrices[randomInt(0, itemB.unitPrices.length - 1)];
  return {
    input: { a, b, x, y },
    textA: itemA.text,
    textB: itemB.text,
  };
}
