var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var errorHandler = require('errorhandler');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactme');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var conSchema = mongoose.Schema({
name:{type:String, required : true},
email:{type:String, required : true},
mobile:{type:String, required : true},
cmnts:{type:String, required : true}
});
var Layout = mongoose.model("Layout", conSchema);
app.get('/', function(req, res){
   res.render('layout');
});

app.post('/', function(req, res){
   var personInfo = req.body; //Get the parsed information
   
  if(!personInfo.name || !personInfo.email || !personInfo.mobile || !personInfo.cmnts){
      res.send("Sorry, you provided worng info");
   } else{
      var newPerson = new Person({
         name: personInfo.name,
         email: personInfo.email,
         mobile: personInfo.mobile,
         cmnts: personInfo.cmnts
      });
    
      newPerson.save(function(err, Layout){
            if(err) res.json(err);
         else
            res.send("Success I will get back to you");
   });
    
  };
});
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(1110);
console.log("Listening to port 1110");
module.exports = app;