use('CRUDdb');

// db.createCollection('courses');

// CREATE
// db.courses.insertOne({ 
//     "name": "nitish", 
//     "course": "express" 
// });

// db.courses.insertMany([
//     {
//       "name": "Alice",
//       "course": "Web Development"
//     },
//     {
//       "name": "Bob",
//       "course": "Data Science"
//     },
//     {
//       "name": "Charlie",
//       "course": "Machine Learning"
//     },
//     {
//       "name": "David",
//       "course": "Mobile App Development"
//     },
//     {
//       "name": "Eve",
//       "course": "Game Development"
//     },
//     {
//       "name": "Frank",
//       "course": "Cybersecurity"
//     },
//     {
//       "name": "Grace",
//       "course": "Full Stack Development"
//     },
//     {
//       "name": "Henry",
//       "course": "Cloud Computing"
//     },
//     {
//       "name": "Ivy",
//       "course": "UI/UX Design"
//     },
//     {
//       "name": "Jack",
//       "course": "Blockchain Technology"
//     }
// ])

// READ
// let a = db.courses.findOne({name : "nitish"});
// console.log(a);

// let b = db.courses.find({name : "nitish"});
// console.log(b.toArray());

// UPDATE
// db.courses.updateOne({name : "Alice"}, {$set:{name : "manik"}})
// db.courses.updateMany({name : "Alice"}, {$set:{name : "manik"}})

// DELETE
// db.courses.deleteOne({name : "manik"})
// db.courses.deleteMany({name : "manik"})