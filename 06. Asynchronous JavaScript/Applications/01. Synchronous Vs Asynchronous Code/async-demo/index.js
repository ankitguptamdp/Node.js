console.log('Before'); 
// Synchronous or Blocking : Synchronous basically means that you can only execute one thing at a time.
// Asynchronous means that you can execute multiple things at a time 
// and you don't have to finish executing the current thing in order to move on to next one.

setTimeout(() => { // Asynchronous
    console.log('Reading a user from the database...');
}, 2000); // Wait of two seconds

console.log('After');

// Node. js is a single threaded language which in background uses multiple threads to execute asynchronous code.
// Node. js is non-blocking which means that all functions ( callbacks ) are delegated to the event loop 
// and they are ( or can be ) executed by different threads.