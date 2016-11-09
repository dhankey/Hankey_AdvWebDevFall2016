/* 
 * To create a schema, just require mongoose, and set the json needed as the 
 * data model.
 */


var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    department: String,
    startDate: {
        type: Date,
        "default": Date.now
    },
    jobTitle: String,
    salary: String
});


var Review = mongoose.model('dhankeys', reviewSchema);

module.exports = Review;