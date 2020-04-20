const debug = require('debug')('app:startup');
const config = require('config')
const morgan = require('morgan');// Morgan : HTTP request logger middleware for node.js.
const helmet = require('helmet');// Helmet helps you secure your Express.js apps by setting various HTTP headers.
const Joi = require('joi');
const logger = require('./middleware/logger');
const courses = require('./routes/courses');
const courses = require('./routes/home');
const express = require('express');
const app = express();

app.set('view engine','pug');
app.set('views','./views'); // default : './views'

app.use(express.json()); // req.body
app.use(express.urlencoded({ extended: true })); // key=value&key=value
app.use(express.static('public'));
app.use(helmet());
app.use('/api/courses', courses); // Now we can change all the '/api/courses with' '/' in routes/courses.js
app.use('/', home);

// Configuration
console.log('Application Name: '+config.get('name'));
console.log('Mail Server: '+config.get('mail.host'));
console.log('Mail Password: '+config.get('mail.password'));

if (app.get('env') == 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled...');
}

app.use(logger);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port} ....`));