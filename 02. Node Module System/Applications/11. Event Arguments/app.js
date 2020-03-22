const EventEmitter = require('events');
const emitter = new EventEmitter();

// // Register a listener
// emitter.on('messageLogged',function(arg1,arg2){// e, eventArg
// console.log('Listener called', arg1, arg2);
// });
// Raise an event
// emitter.emit('messageLogged', 1, 'http://');

// // Register a listener
// emitter.on('messageLogged',function(arg){// e, eventArg
// console.log('Listener called', arg);
// });
// // Raise and event
// emitter.emit('messageLogged', { id : 1,url : 'http://'});

// Register a listener
// ECMAScript is a scripting-language specification standardized by Ecma International. 
// It was created to standardize JavaScript to help foster multiple independent implementations.
// emitter.on('messageLogged', (arg) => {// From ES6 wer can write 'Arrow Function'
//     console.log('Listener called', arg);
// });
// // Raise and event
// emitter.emit('messageLogged', { id: 1, url: 'http://' });

// Raise : logging (date : message)
emitter.on('logging', (arg) => {
    console.log(`Output : ${arg.message}`);
    console.log('Output :',arg);
});
emitter.emit('logging', {message : 'Work harder'});