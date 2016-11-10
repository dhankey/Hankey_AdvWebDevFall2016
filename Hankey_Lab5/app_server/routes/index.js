var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');

/* Locations pages */
router.all('/', ctrlHome.home);
router.all('/index', ctrlHome.home);
router.all('/update/:id', ctrlHome.update);
router.all('/view/:id?', ctrlHome.view);
router.all('/update', ctrlHome.update);
router.all('/cancel', ctrlHome.cancel);

module.exports = router;
