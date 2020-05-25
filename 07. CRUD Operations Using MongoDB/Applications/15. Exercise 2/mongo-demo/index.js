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
  //.find({ isPublished: true, tags: { $in: ['frontend','backend'] } })
  .find({ isPublished: true})
  .or([ { tags: 'frontend' }, { tags: 'backend' } ])
  .sort({ price: -1 }) // or .sort('price') // for descending .sort('-price')
  .select('name author price')//.select({ name: 1, author: 1, price: 1 })
}

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();