const input = await Deno.readTextFile("./input.txt");

const snack: Array<string> = input.split("\n");
let sum = 0;
const RPSMap = new Map<string, number>([
  ["A", 1],
  ["B", 2],
  ["C", 3],
]);

//A(rock) => B(paper) => 1 - 2 = -1
//B(paper) => C(scissor) => 2 - 3 = -1
//C(scissor) => A(rock) => 3 - 1 = 2

snack.forEach((el) => {
  const first = RPSMap.get(el.substring(0, 1))!;
  const second = el.substring(2).trim();

  if (second === "X") {
    if (first === 1) {
      sum += 3;
    } else if (first === 2) {
      sum += 1;
    } else {
      sum += 2;
    }
  } else if (second === "Y") {
    sum += first + 3;
  } else {
    if (first === 1) {
      sum += 2 + 6;
    } else if (first === 2) {
      sum += 3 + 6;
    } else {
      sum += 1 + 6;
    }
  }
});

console.log(sum);
