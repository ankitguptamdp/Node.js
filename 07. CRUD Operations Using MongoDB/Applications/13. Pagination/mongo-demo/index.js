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
    const pageNumber = 2;
    const pageSize = 10;
    // /api/courses?pageNumber=2&pageSize=10

    const courses = await Course
        .find({ author: 'Ankit', isPublished: true}) // Filtering condition
        .skip((pageNumber -1) * pageSize) // For pagination
        .limit(pageSize) // Limit to pageSize no of items
        .sort({ name: 1 }) // Sorting ascending(1) or descending(-1)
        .select({ name: 1, tags: 1});
    console.log(courses);
}

getCourses();