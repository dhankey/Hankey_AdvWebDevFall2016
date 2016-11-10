var express = require('express');
var router = express.Router();
var ctrlReviews = require('../controllers/reviews');

// reviews
router.get('/employee', ctrlReviews.reviewsReadAll);
router.get('/employee/:employeeid', ctrlReviews.reviewsReadOne);
router.post('/employee', ctrlReviews.reviewsCreate);
router.put('/employee/:employeeid', ctrlReviews.reviewsUpdateOne);
router.delete('/employee/:employeeid', ctrlReviews.reviewsDeleteOne);

module.exports = router;
