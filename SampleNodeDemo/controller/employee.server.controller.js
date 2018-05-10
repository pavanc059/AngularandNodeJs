var empDT= require('../models/employee.server.model');

exports.list = function (req, res) {
    var query = empDT.find();
    query.sort({ CreationDate:'desc'})
            .limit(12).exec(function(err, results){
                res.json(results);
            });
    
}

exports.create = function(req, res){
    var entry= new empDT({
        Name: req.body.Name,
        Country: req.body.Country,
        City: req.body.City,
        Salary: req.body.Salary
    });
    entry.save();
    res.redirect(301,'/');
};

exports.getEmployee = function(req,res) {
res.render('newnote',{title:'Palan'});
    
};
