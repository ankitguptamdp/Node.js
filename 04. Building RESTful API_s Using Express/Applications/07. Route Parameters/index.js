const express = require('express');
const app = express();
app.get('/',(req, res)=>{
    res.send('Hello World !!! Its corona-time');
});
app.get('/api/courses',(req, res)=>{
    res.send([1, 2, 3]);
});
app.get('/api/courses/:id',(req, res)=>{
    res.send(req.params.id);
});
// app.get('/api/posts/:year/:month',(req, res)=>{
//     res.send(req.params);
// });
app.get('/api/posts/:year/:month',(req, res)=>{
    res.send(req.query);
});
//PORT
const port = process.env.PORT || 3000;//Initialize PORT in the terminal : export PORT = 3333
app.listen(port,() => console.log(`Listening to port ${port} ....`));
// To add environment variable use :
// Ubuntu : export PORT=3333 
// Windows : SET PORT=3333