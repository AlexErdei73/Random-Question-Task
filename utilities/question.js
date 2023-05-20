const ITEMS = {
  potatoes: {
    text: "kg of potatoes",
    unitPrices: [55, 60, 75, 80, 90],
    matchingItems: ["carrots", "bananas", "tomatoes", "peppers"],
    removePlurals: false,
    funLines: [
      "\\text{You can start with the following formula:}",
      "\\sigma=\\frac{2\\pi^5k^4}{15c^2h^3}\\int_0^{\\infty}\\frac{x^3}{e^x-1}dx",
      "\\text{Don't worry, I'm just kidding :) The simple solution is this:}",
      "",
    ],
  },
  carrots: {
    text: "kg of carrots",
    unitPrices: [40, 45, 50, 60],
    matchingItems: ["potatoes", "bananas", "tomatoes", "peppers"],
    removePlurals: false,
  },
  bananas: {
    text: "kg of bananas",
    unitPrices: [80, 90, 100, 110],
    matchingItems: ["potatoes", "carrots", "tomatoes", "peppers"],
    removePlurals: false,
  },
  tomatoes: {
    text: "kg of tomatoes",
    unitPrices: [150, 170, 180],
    matchingItems: ["potatoes", "carrots", "bananas", "peppers"],
    removePlurals: false,
  },
  peppers: {
    text: "kg of peppers",
    unitPrices: [180, 185, 190, 200, 210],
    matchingItems: ["potatoes", "carrots", "bananas", "tomatoes"],
    removePlurals: false,
  },
  tvSets: {
    text: "TV sets",
    unitPrices: [450, 690, 1500],
    matchingItems: ["soundBars"],
    removePlurals: true,
  },
  soundBars: {
    text: "sound bars",
    unitPrices: [150, 650, 400, 240, 300],
    matchingItems: ["tvSets"],
    removePlurals: true,
  },
};

const LOWEST = 2;
const HIGHEST = 9;

function partResults(params) {
  const { input, textA, textB, removePlurals } = params;
  const { a, b, x, y } = input;
  const c = a * x + b * y;
  const d = b * x + a * y;
  const answer = Math.floor((c + d) / (a + b));

  let textAWithNoPlural = textA;
  let textBWithNoPlural = textB;
  let moneyUnit = "p";
  if (removePlurals) {
    textAWithNoPlural = textA.slice(0, -1);
    textBWithNoPlural = textB.slice(0, -1);
    moneyUnit = "£";
  }
  return { c, d, answer, textAWithNoPlural, textBWithNoPlural, moneyUnit };
}

export function answer(params) {
  const { answer } = partResults(params);
  return answer;
}

export function question(params) {
  const { input, textA, textB } = params;
  const { a, b } = input;
  const { c, d, textAWithNoPlural, textBWithNoPlural, moneyUnit } =
    partResults(params);
  const lines = [
    `\\text{${a}${textA} and ${b}${textB} have a total cost of ${c}${moneyUnit}.}`,
    `\\text{${b}${textA} and ${a}${textB} have a total cost of ${d}${moneyUnit}.}`,
    "",
    `\\text{Work out the total cost of 1${textAWithNoPlural} and 1${textBWithNoPlural}.}`,
  ];
  return lines;
}

export function solution(params) {
  const { input, textA, textB, funLines } = params;
  const { a, b } = input;
  const { c, d, answer, textAWithNoPlural, textBWithNoPlural, moneyUnit } =
    partResults(params);
  const answerLines = [
    `\\text{If x is the cost of 1${textA} and y is the cost of 1${textB}}`,
    `${a}x + ${b}y = ${c}`,
    `${b}x + ${a}y = ${d}`,
    "\\text{Add up the equations to get}",
    `${a + b}x + ${a + b}y = ${c + d}`,
    `\\text{Divide both sides by}${a + b}`,
    `x + y = ${answer}`,
    `\\text{1${textAWithNoPlural} and 1${textBWithNoPlural} have a total cost of ${answer}${moneyUnit}.}`,
  ];
  const lines = funLines ? funLines.concat(answerLines) : answerLines;
  return lines;
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
  const a = randomInteger(LOWEST, HIGHEST);
  const b = randomInteger(LOWEST, HIGHEST, [a]);
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
    removePlurals: itemA.removePlurals,
    funLines: itemA.funLines,
  };
}
