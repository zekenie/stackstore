var router = require('express').Router();
var Category = require('../../../db/models/category');



router.route('/')
.get(function(req, res, next) {
  Category.find().exec().then(function(categories) {
    res.json(categories);
  });
})


module.exports = router;