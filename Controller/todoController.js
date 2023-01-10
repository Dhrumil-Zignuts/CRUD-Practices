let studentModel = require('../Models/students');

module.exports = function (app){
    
    
    
    app.get('/',(req,res)=>{
        studentModel.find((err,data)=>{
            if(err) throw err;
            res.status(200).send(data);
        })
    })

    app.post('/addStudent', (req,res)=>{

        let newStudent = new studentModel();

        newStudent.studentFirstName = req.body.firstname;
        newStudent.studentLastName = req.body.lastname;
        newStudent.studentAddress = req.body.address;
        newStudent.studentDOB = req.body.dob;
        newStudent.StudentContactNumber = req.body.number;

        newStudent.save((err,data)=>{
            if(err) throw err;
            res.send(data);
        })
    })

    app.post('/delete',(req,res)=>{
        studentModel.findByIdAndDelete(req.body.id, (err,data)=>{
            if (err) throw err;
            res.send(data);
        })
    })

    app.post('/update', (req,res)=>{
        studentModel.findByIdAndUpdate(req.body.id, {studentFirstName : req.body.firstname}, (err,data)=>{
            if(err) throw err;
            res.send(data);
        })
    })
}