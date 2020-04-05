const Joi = require('joi'); // It returns a class that why following nomenclature for class.
const express = require('express');
const app = express();
app.use(express.json());
// express. json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object.
// This method is called as a middleware in your application using the code: app.
const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];
app.get('/', (req, res) => {
    res.send('Hello World !!! Its corona-time');
});
app.get('/api/courses', (req, res) => {
    //console.log(courses);
    res.send(courses);
});
app.post('/api/courses', (req, res) => {
    const {error} = validateCourse(req.body); // It is equivalent to result.error
    // This is known as object destructuring {error}
    if (error) return res.status(400).send(error.details[0].message);
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };
    // const result = Joi.validate(req.body, schema); 
    // //console.log(result);
    // if (result.error) {
    //     //res.status(400).send(result.error);
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }
    // // if(!req.body.name || req.body.name.length < 3){
    // //     // 400 Bad Request
    // //     res.status(400).send('Name is required and should be minimum 3 characters.');
    // //     return;
    // // }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});
app.put('/api/courses/:id', (req, res) => {
    // Lookup up the course
    // If not existing, return 404 - Not found
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');

    // Validate
    // If invalid, return 400 - Bad request
    // const schema = {
    //     name: Joi.string().min(3).required()
    // };
    // const result = Joi.validate(req.body, schema);
    //const result = validateCourse(req.body);
    const {error} = validateCourse(req.body); // It is equivalent to result.error
    // This is known as object destructuring {error}
    // if (result.error) {
    //     res.status(400).send(result.error.details[0].message);
    //     return;
    // }
    if (error) return res.status(400).send(error.details[0].message);

    // Update course
    // Return the updated course
    course.name = req.body.name;
    res.send(course);
});
app.delete('/api/courses/:id',(req, res)=>{
    // Look up the course
    // Not existing, return 404 - Not Found
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');

    // Delete
    const index = courses.indexOf(course);
    courses.splice(index,1);

    // Return the same course
    res.send(course);
});
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});
//PORT
const port = process.env.PORT || 3000;//Initialize PORT in the terminal : export PORT=3333
app.listen(port, () => console.log(`Listening to port ${port} ....`));
// To add environment variable use :
// Ubuntu : export PORT=3333
// Windows : SET PORT=3333
// To Kill the activity on the port 3000 :sudo kill -9 $(sudo lsof -t -i:3000) 
// To check the active ports : sudo lsof -i -P -n | grep LISTEN

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema); 
}