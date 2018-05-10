var express = require('express');
var router = express.Router();
var employeeController=require('../controller/employee.server.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get Employees list
router.get('/employeeData', function (req, res) {
  //return
  res.setHeader('charset', 'utf-8');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  return JSON.stringify(employeeController.list(req, res));
});
/* Get New not page */
router.get('/newnote', function(req,res) {
  return employeeController.getEmployee(req,res);
  
});
/* POST New not page */
router.post('/newnote', function (req, res) {
  return employeeController.create(req, res);

});

module.exports = router;
