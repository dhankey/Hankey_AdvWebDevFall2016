var mongoose = require('mongoose');
var Review = mongoose.model('dhankey');

function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};


module.exports.reviewsReadAll = function(req, res) {
        
    console.log('Getting all reviews');
    Review
     .find()
     .exec(function(err, results){
          if ( err ) {
              sendJSONresponse(res, 404, err);
          } else {
              sendJSONresponse(res, 200, results);
          }
     });

    
};



module.exports.reviewsReadOne = function(req, res) {
    
    if (req.params && req.params.employeeid) {
      console.log('Getting single review with id =', req.params.employeeid );
      Review
      .findById(req.params.employeeid)
      .exec(function(err, results){

          if ( results ) {
             sendJSONresponse(res, 200, results);
          } else {
              sendJSONresponse(res, 404, {
                "message": "employeeid not found"
              });
          }

      });

    } else {
        sendJSONresponse(res, 404, {
            "message": "reviewid not found"
        });
    }
};




/*   POST a new review
 *   /api/v1/reviews 
 */
module.exports.reviewsCreate = function(req, res) {
    
    console.log('Creating a review with data ', req.body);
    
    Review.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          department: req.body.department,
          jobTitle: req.body.jobTitle,
          salary: req.body.salary
    }, function(err, dataSaved) {
        if (err) {
          console.log(err);
          sendJSONresponse(res, 400, err);
        } else {
          //console.log(location);
          sendJSONresponse(res, 201, dataSaved);
        }
    });
  
  
};



module.exports.reviewsUpdateOne = function(req, res) {
    
  if ( !req.params.employeeid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, employeeid is required"
    });
    return;
  }
  Review
    .findById(req.params.employeeid)
    .exec( function(err, reviewData) {
        if (!reviewData) {
          sendJSONresponse(res, 404, {
            "message": "employeeid not found"
          });
          return;
        } else if (err) {
            sendJSONresponse(res, 400, err);
            return;
        }
        reviewData.firstName = req.body.firstName;
        reviewData.lastName = req.body.lastName;
        reviewData.department = req.body.department;
        reviewData.jobTitle = req.body.jobTitle;
        reviewData.salary = req.body.salary;

        reviewData.save(function(err, data) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, data);
          }
        });
    });
    
};


module.exports.reviewsDeleteOne = function(req, res) {
  if ( !req.params.employeeid ) {
    sendJSONresponse(res, 404, {
      "message": "Not found, employeeid is required"
    });
    return;
  }
  Review
    .findByIdAndRemove(req.params.employeeid)
    .exec( function(err, reviewData) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
        }
          console.log("Employee id " + req.params.employeeid + " deleted");
          sendJSONresponse(res, 204, null);
                
    });
};
