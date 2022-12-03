export const x = "";
let sum = 0;
//let max = 0;
let topOne = 0;
let topTwo = 0;
let topThree = 0;
const input = await Deno.readTextFile("./input.txt");
const snack: Array<string> = input.split("\n");
snack.forEach((el) => {
  if (Number(el) === 0) {
    if (sum > topOne) {
      const temp = topOne;
      topOne = sum;
      const temp2 = topTwo;
      topTwo = temp;
      topThree = temp2;
    } else if (sum > topTwo) {
      const temp = topTwo;
      topTwo = sum;
      topThree = temp;
    } else if (sum > topThree) {
      topThree = sum;
    }
    sum = 0;
  }
  sum += Number(el);
});

console.log(topOne);
console.log(topTwo);
console.log(topThree);
console.log(topOne + topTwo + topThree);
