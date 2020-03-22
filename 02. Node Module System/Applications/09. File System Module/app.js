const fs = require('fs');

// const files = fs.readdirSync('./');//Synchronous Mode
// console.log(files); 

// fs.readdir('./', function(err, files){ //Asynchronous Mode
//     if (err) console.log('Error', err);
//     else console.log('Result',files);
// });

fs.readdir('./Ankit', function(err, files){ //Asynchronous Mode
    if (err) console.log('Error', err);
    else console.log('Result',files);
});

// All the methods in this fs module comes in pair Synchronous and Asynchronous. 
// Always prefer to use Asynchronous methods.