var mongoose = require('mongoose');
var conModel = require('../models/cont');

var conUser = function(req,res){
  var conmodel = new conModel({
    name : req.body.name,
    email : req.body.email,
    message : req.body.message
  });

donmodel.save(function(err,doc){
    if(err) res.json(err);
    else {
      res.render('./pages/success');
    };
  });
}


module.exports = {"conUser" : conUser };
