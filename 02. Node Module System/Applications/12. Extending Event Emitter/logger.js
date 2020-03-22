const EventEmitter = require('events');
var url = 'http://mylogger.io/log';
class Logger extends EventEmitter{
    log(message){ //When we are declaring a function inside a class function keyword is not required 
        //and now that function is known as method of the class.
        // Send an HTTP request
        console.log(message);
        // Raise an event
        //emitter.emit('messageLogged', {id : 1, url : 'http://'});
        this.emit('messageLogged', {id : 1, url : 'http://'});
    }
}
module.exports = Logger;