let mongoose = require('mongoose');



//Create a Schema For the Students
let studentSchema = new mongoose.Schema({
    studentFirstName : String,
    studentLastName : String,
    studentAddress : String,
    studentDOB : String,
    StudentContactNumber : String
})

// Create a Model and Export it
let studentModel = mongoose.model('Students', studentSchema);
module.exports = studentModel;