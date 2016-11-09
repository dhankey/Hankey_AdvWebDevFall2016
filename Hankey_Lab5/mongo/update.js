/* 
 * These examples do not work as is, they are just code examples on how to do so.
 */

var Review = require('../models/review');


var id = req.params.id;
if (req.method === 'POST') {

    id = req.body._id;
    var query = { '_id': req.body._id };
    
    var update = {
     firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department,
    startDate: req.body.startDate,
    jobTitle: req.body.jobTitle,
    salary: req.body.salary
   };
   
   var options = {};
   var callback = function(){};
   
   Review.update(query, update, options, callback);

}