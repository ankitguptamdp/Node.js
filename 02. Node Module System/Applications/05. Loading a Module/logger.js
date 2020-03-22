// var url = 'http://mylogger.io/log';//Implementation details

// function log(message) {
//     // Send an HTTP request
//     console.log(message);
// }

// module.exports.log = log;
// //module.exports.endPoint = url;

var url = 'http://mylogger.io/log'

function log(message){
    // Send an HTTP request
    console.log(message);
}
module.exports = log; //export only this function not whole object
// So you export a single module or an object