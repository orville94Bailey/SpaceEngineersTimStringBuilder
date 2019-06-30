var express = require('express');
var router = express.Router();
var reader = require('../logic/componentCostReader')

/* GET home page. */
router.get('/', function(req, res, next) {
  reader.getComponentJson('componentCosts.csv').then(obj=> {
    res.render('index', { layout:'layout', title: 'TIM string producer', componentList:obj });
  })
});

module.exports = router;
