
import console from 'console';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", nameAnswer => {
  rl.question("What is your age? ", ageAnswer => {
    console.log(`Hello ${nameAnswer}, you are ${ageAnswer} years old`);
    rl.close();
  });
});

// console.log('eof');