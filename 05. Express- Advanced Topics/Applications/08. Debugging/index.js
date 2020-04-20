// const startupDebugger = require('debug')('app:startup');
// const dbDebugger = require('debug')('app:db');
// const express = require('express');
// const app = express();
// const morgan = require('morgan');

// if (app.get('env') == 'development') {
//     app.use(morgan('tiny'));
//     // console.log('Morgan enabled...');
//     startupDebugger('Morgan enabled...');
// }

// // Db work...
// dbDebugger('Connected to the database...');

// const port = process.env.PORT || 3000;
// app.listen(port, () => console.log(`Listening to port ${port} ....`));

const debug = require('debug')('app:startup');
const express = require('express');
const app = express();
const morgan = require('morgan');

if (app.get('env') == 'development') {
    app.use(morgan('tiny'));
    // console.log('Morgan enabled...');
    debug('Morgan enabled...');
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port} ....`));