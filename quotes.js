/**
 * Run the code. Once you do you can see the readFilePromise variable goes from a pending state to a fulfilled 
 * state once the asynchronous code inside the promise callback calls the resolve() function.
 * More precisely, the promise changes state when the resolve() or reject() function is called.
 */
const readFile = require("./read-file");

const readFilePromise = readFile("quotes.txt");

console.log(readFilePromise);

setTimeout(() => {
  console.log(readFilePromise);
}, 500);