const input = await Deno.readTextFile("./sinput.txt");

const pairs: Array<string> = input.split("\n\r\n");

console.log(pairs);
