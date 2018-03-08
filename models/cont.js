var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var conSchema = new Schema({
name:{type:String, required : true},
email:{type:String, required : true},
mobile:{type:String, required : true},
cmnts:{type:String, required : true}
});

var conModel = mongoose.model('con',conSchema);
module.exports = conModel;
