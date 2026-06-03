
import fs from "fs";

const data = "Hello fs!";
fs.writeFileSync('output.txt', data);

console.log("EOF");