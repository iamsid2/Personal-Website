var express = require('express');
var router = express.Router();
var contcMe = require('../controller/contcMe');

/* GET home page. */
router.get('/layout', function(req,res){
  res.render('layout');
});
router.post('/layout', contcMe.conUser );
module.exports = router;
