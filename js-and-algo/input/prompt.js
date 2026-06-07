import promptSync from "prompt-sync";
const prompt = promptSync();

const myName = prompt('What is your name? ');
const age = prompt('What is your age? ');

console.log(`Hello ${myName}, you are ${age} years old`);
console.log("eof");