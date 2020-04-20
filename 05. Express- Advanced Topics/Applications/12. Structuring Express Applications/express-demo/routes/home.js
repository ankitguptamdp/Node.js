const express = require('express');//const app = express(); // This doesn't work when we separate the route in a different module.
const router = express.Router();

app.get('/', (req, res) => {
    res.render('index',{title: 'My Express App',message:'Hello'});
});

module.exports = router;