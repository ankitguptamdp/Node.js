// const http = require('http');
// const server = http.createServer();
// server.on('connection',(socket)=>{
//     console.log('New Connection');
// });
// server.listen(3000); //Port No : 3000
// // Bunch of core functionality of this server is based on EventEmitter
// // like on and emit
// console.log('Listening on port 3000 ....');

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if (req.url === '/'){
//         res.write('Hello World'); 
//         res.end();
//     }
// });
// server.listen(3000);
// console.log('Listening on port 3000 ....');

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
    // We are not using this module because it becomes cumbersome writing an if for every url
    // We are using Express
    // Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. 
    // It facilitates the rapid development of Node based Web applications.
    // It is build on the top of 'http' module.
});
server.listen(3000);
console.log('Listening on port 3000 ....');