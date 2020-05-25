const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
  });

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course
      .find({ isPublished: true })
      .or([
        { price: { $gte: 15 } },
        { name: /.*by.*/i }
      ])
      .sort({ price: -1 }) // or .sort('price') // for descending .sort('-price')
      .select('name author price')//.select({ name: 1, author: 1, price: 1 })
  }

async function updateCourse(id) {
    // Approach: Query First
    // findById()
    // Modify its properties
    // save()

    // Approach: Update First
    // Update directly
    // Optionally: get the updated document

    const course = await Course.findById(id);
    if(!course) return;

    course.isPublished = true;
    course.author = 'Another Author';

    // course.set({
    //     isPublished: true,
    //     author: 'Another Author'
    // });

    const result = await course.save();
    console.log(result);
}

updateCourse('5ec78137f1e1b23967aeafd0');