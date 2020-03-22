// var x=;//Write this syntactical error on the very first line to see function(exports, require, module, __filename, __dirname) 
// var url = 'http://mylogger.io/log' //Implementation details

// function log(message){
//     // Send an HTTP request
//     console.log(message);
// }
// module.exports = log; //export only this function not whole object
// // So you export a single module or an object

// (function (exports, require, module, __filename, __dirname) {

//     var url = 'http://mylogger.io/log' //Implementation details

//     function log(message) {
//         // Send an HTTP request
//         console.log(message);
//     }
//     module.exports = log; //export only this function not whole object
//     // So you export a single module or an object

//     module.exports.log = log;
//     exports.log = log; //You can write it both ways
//     //But you can't reset export
//     //exports = log;
//     //It is a reference to module.reference and we can't change that

// })

//Javascript don't run our code dirctly but it wraps its module in a function like above
//require function appears to be global but it is not

console.log(__filename);
console.log(__dirname);
var url = 'http://mylogger.io/log' //Implementation details
function log(message) {
    // Send an HTTP request
    console.log(message);
}
module.exports = log; //export only this function not whole object
// So you export a single module or an object
exports.log = log;


