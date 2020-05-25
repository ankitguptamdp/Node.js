const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String, 
  tags: [ String ],
  date: Date, 
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  return await Course
  .find({ isPublished: true, tags: 'backend' })
  .sort({ name: 1 }) // or .sort('name') // for descending .sort('-name')
  .select({ name: 1, author: 1 }); // or .select('name author')
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
