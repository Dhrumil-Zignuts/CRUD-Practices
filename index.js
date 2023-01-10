let express = require('express');
let todoController = require('./Controller/todoController');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://dhrumilZignuts:deepatel@zignuts-technology.zveo5bz.mongodb.net/practiceToDo', ()=>{
    console.log('MongoDB Connected Successfully');
})

// Create the app 
app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Fire the Controller Function
todoController(app);

// Listen the Application on POrt no 3000
app.listen(3000, ()=>{
    console.log('Server is running on Port No. 3000');
})