const Joi = require('joi'); // It returns a class that why following nomenclature for class.
const express = require('express');
const app = express();
app.use(express.json());
// express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
// This method is called as a middleware in your application using the code: app.
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
app.post('/api/courses', (req, res) =>{
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    //console.log(result);
    if(result.error)
    {
        //res.status(400).send(result.error);
        res.status(400).send(result.error.details[0].message);
        return;
    }
    // if(!req.body.name || req.body.name.length < 3){
    //     // 400 Bad Request
    //     res.status(400).send('Name is required and should be minimum 3 characters.');
    //     return;
    // }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
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
// To Kill the activity on the port 3000 :sudo kill -9 $(sudo lsof -t -i:9001)