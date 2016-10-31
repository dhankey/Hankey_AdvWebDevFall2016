/* GET home page */
module.exports.about = function(req, res){
  res.render('about', { title: 'Dan Hankey\'s About Page' });
};