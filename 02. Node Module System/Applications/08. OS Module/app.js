const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory : '+totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6
// Using ES2015 we can write it without concatenation

console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${freeMemory}`);
//What is the Backtick key?
//Alternatively referred to as an acute, backtick, grave, grave accent, left quote, open quote, or a push,
// the back quote or backquote is a punctuation mark (`). It is on the same U.S. computer keyboard key as the tilde.
//Before node we could not interact with os details.