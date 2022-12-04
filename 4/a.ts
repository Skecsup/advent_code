const input = await Deno.readTextFile("./input.txt");
let sum = 0;
const pairs: Array<string> = input.split("\n");

pairs.forEach((el, index) => {
  const pair = el.split(",");

  const first = pair[0].split("-");
  let second = pair[1].split("-");
  if (index === pairs.length - 1) {
    second = pair[1].split("-");
  } else {
    second = [second[0], second[1].slice(0, -1)];
  }

  const firstNumber = [parseInt(first[0]), parseInt(first[1])];
  const secondNumber = [parseInt(second[0]), parseInt(second[1])];
  console.log(firstNumber, secondNumber);
  console.log("------------------------");

  if (firstNumber[0] <= secondNumber[0] && firstNumber[1] >= secondNumber[1]) {
    sum += 1;
    console.log(firstNumber);
    console.log(secondNumber);
    console.log("+1");
  } else if (
    secondNumber[0] <= firstNumber[0] &&
    secondNumber[1] >= firstNumber[1]
  ) {
    sum += 1;
    console.log(firstNumber);
    console.log(secondNumber);
    console.log("+1");
  }
});

console.log(sum);
