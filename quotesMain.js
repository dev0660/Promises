/**
 * This code reads the contents of quotes.txt using the asynchronous fs.readFile() function. 
 * In the readFile() callback function, it splits the file contents into lines and then randomly assigns
 * one of the lines to the quote variable.
 */
const fs = require("fs");

let quote = null;

console.log("Finding a quote...");

fs.readFile("quotes.txt", (error, buffer) => {
  if (error) {
    throw error;
  }
  const lines = buffer.toString().split("\n");
  quote = lines[Math.floor(Math.random() * lines.length)];
});

console.log(`Your quote is: ${quote}`);