//var logger = require('./logger');
//logger = 1;
//console.log(logger);
//logger.log('message');

// We should define the logger as const because 
// we dont want to update the value like below
// logger = 1
// So define it like
// const logger = require('./logger');
// //logger = 1;
// logger.log('message');
 
const log = require('./logger');
log('message'); 