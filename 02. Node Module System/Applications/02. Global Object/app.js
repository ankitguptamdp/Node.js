// console.log();//global
// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// window.console.log();// You can write with or without the global keyword 'window' in js
// global.console.log();// Similarly for Node.js we have the keyword 'global'

var message = 'Msg';// variable declared here are added to the global object hence the output is 'undefined'.
console.log(global.message);
