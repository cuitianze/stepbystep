var express = require('express');
var multer = require('multer');
var router = express.Router();
var upload = multer({ dest: 'uploads/'});

router.post('/', upload.single('photo'), function(req, res, next) {
  res.json({
    code: 0,
    msg: 'success'
  });
});

router.get('/withAjax', function(req, res, next) {
  res.render('uploadWithAjax');
});

module.exports = router;
