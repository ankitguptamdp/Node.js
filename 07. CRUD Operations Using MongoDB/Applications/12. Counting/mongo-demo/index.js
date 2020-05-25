const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {

    const nodeCourse = new Course({
        name: 'Node.js Course',
        author: 'Ankit',
        tags: ['node', 'backend'],
        isPublished: true
    });
    const nodeResult = await nodeCourse.save();
    console.log(nodeResult);

    const angularCourse = new Course({
        name: 'Angular Course',
        author: 'Ankit',
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    const angularResult = await angularCourse.save();
    console.log(angularResult);
}

//createCourse();

async function getCourses() {
    const courses = await Course
        .find({ author: 'Ankit', isPublished: true}) // Filtering condition
        .limit(10) // Limit to 10 items
        .sort({ name: 1 }) // Sorting ascending(1) or descending(-1)
        .count();
    console.log(courses);
}

getCourses();