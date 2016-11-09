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