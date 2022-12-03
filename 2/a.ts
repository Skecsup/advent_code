//A - ROCK => 1 point       | play Y => paper
//B - PAPER => 2 point      | play Z => scissors
//C - SCISSORS => 3 point   | play X => rock
//WIN => 6 point
//DRAW => 3 point
//LOSE => 0 point

const input = await Deno.readTextFile("./input.txt");

const snack: Array<string> = input.split("\n");

const RPSMap = new Map<string, number>([
  ["A", 1],
  ["B", 2],
  ["C", 3],
  ["X", 1],
  ["Y", 2],
  ["Z", 3],
]);
//Wins
// A - Y = -1
// B - Z = -1
// C - X = 2

//Draw
// ott null

//Lose
// A - Z = -2
// B - X = 1
// C - Y = 1
let sum = 0;
snack.forEach((el) => {
  const first = RPSMap.get(el.substring(0, 1))!;
  const second = RPSMap.get(el.substring(2).trim())!;

  //console.log(first + " ===> " + el.substring(0, 1));
  //console.log(second + " ===> " + el.substring(2));

  if (first - second === 0) {
    sum += second + 3;
  } else if (first - second === -1 || first - second === 2) {
    sum += second + 6;
  } else {
    sum += second;
  }
});

console.log(sum);
