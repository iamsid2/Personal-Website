var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
  res.send('successfully submitted i will get back to you!!');
});

module.exports = router;
