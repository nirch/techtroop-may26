console.log(process.argv);

// const myName = process.argv[2];
// const age = process.argv[3];

const [, , myName, age] = process.argv;

console.log(`Hello ${myName}, you are ${age} years old`);
