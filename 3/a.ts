const input = await Deno.readTextFile("./input.txt");

const rucksack: Array<string> = input.split("\n");
let sum = 0;
const similarChar: string[] = [];
rucksack.forEach((el) => {
  const first = [...new Set(el.substring(0, el.length / 2).split(""))];
  const second = [...new Set(el.slice(el.length / 2, -1).split(""))];

  first.forEach((char) => {
    second.forEach((char2) => {
      if (char === char2) {
        similarChar.push(char);
      }
    });
  });
});

similarChar.forEach((char) => {
  if (char.charCodeAt(0) >= 97) {
    sum += char.charCodeAt(0) - "a".charCodeAt(0) + 1;
  } else {
    sum += char.charCodeAt(0) - "A".charCodeAt(0) + 27;
  }
});
console.log(similarChar);

console.log(sum);
