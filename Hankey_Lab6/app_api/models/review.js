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

/* This model will also create the collection in the Loc8r database when used */
var Review = mongoose.model('dhankey', reviewSchema);
