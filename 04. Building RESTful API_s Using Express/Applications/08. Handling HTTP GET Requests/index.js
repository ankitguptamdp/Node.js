const express = require('express');
const app = express();
const courses=[
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];
app.get('/',(req, res)=>{
    res.send('Hello World !!! Its corona-time');
});
app.get('/api/courses',(req, res)=>{
    res.send(courses);
});
app.get('/api/courses/:id',(req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});
//PORT
const port = process.env.PORT || 3000;//Initialize PORT in the terminal : export PORT=3333
app.listen(port,() => console.log(`Listening to port ${port} ....`));
// To add environment variable use :
// Ubuntu : export PORT=3333 
// Windows : SET PORT=3333  