var mongoose =require('mongoose');
var Schema=mongoose.Schema;

var employeeData = new Schema({
    Name: String, 
    Country: String,
    City: String, 
    Salary: String,
    CreationDate:{type:Date, default: Date.now}
});

//Export 
module.exports = mongoose.model('EmployeeTable', employeeData);