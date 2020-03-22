// const EventEmitter = require('events');// Naming convention for any Class is TitleCase
// const emitter = new EventEmitter();
// emitter.emit('messageLogged');//Making a noise, produce - signalling
// // Nothing will happen if we will run only above code
// // Because we just have raised an event but no where in our application we have registered a listener,
// // that is interested in the event.

const EventEmitter = require('events');// Naming convention for any Class is TitleCase
const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged',function(){
console.log('Listener called');
});

// Raise an event
emitter.emit('messageLogged');

// The order is important as we have to register the listener first and then only we have to raise and event.
// Because when we call the emit method it iterates over all the registered listeners and calls them synchronously.