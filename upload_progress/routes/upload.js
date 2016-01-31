var express = require('express');
var multer = require('multer');
var router = express.Router();
var upload = multer({ dest: 'uploads/'});

router.post('/', upload.single('photo'), function(req, res, next) {
  console.log(req.files);
  res.json({
    code: 0,
    msg: 'success'
  });
});

module.exports = router;
