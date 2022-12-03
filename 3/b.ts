const input = await Deno.readTextFile("./input.txt");
let sum = 0;
const rucksack: Array<string> = input.split("\n");
const similarChar: string[] = [];
for (let i = 0; i < rucksack.length; i += 3) {
  const oldfirst = [...new Set(rucksack[i])];
  const oldsecond = [...new Set(rucksack[i + 1])];
  const oldthird = [...new Set(rucksack[i + 2])];
  const first = oldfirst.filter((c) => c != "\r");
  const second = oldsecond.filter((c) => c != "\r");
  const third = oldthird.filter((c) => c != "\r");
  first.forEach((char1) => {
    second.forEach((char2) => {
      if (char1 === char2) {
        third.forEach((char3) => {
          if (char3 === char1) {
            similarChar.push(char3);
          }
        });
      }
    });
  });
}
similarChar.forEach((char) => {
  if (char.charCodeAt(0) >= 97) {
    sum += char.charCodeAt(0) - "a".charCodeAt(0) + 1;
  } else {
    sum += char.charCodeAt(0) - "A".charCodeAt(0) + 27;
  }
});
console.log(similarChar);

console.log(sum);
