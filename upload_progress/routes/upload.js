var express = require('express');
var multer = require('multer');
var mv = require('mv');
var Sequelize = require('sequelize');
var router = express.Router();
var upload = multer({ dest: 'temp/'});
var db = require('../config/db');

var Photo = db.define('photo', {
  name: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});
Photo.sync({force: true});

router.post('/', upload.single('photo'), function(req, res, next) {
  const photo = req.file;
  if(!photo) {
    return res.json({
      code: -1,
      msg: '请上传图片'
    });
  }
  const dest = './uploads/photos/' + photo.originalname;
  mv(photo.path, dest, {mkdirp: true}, function(err) {
    if(err) throw err;
    Photo.create({
      name: photo.originalname,
      url: dest
    }).then(function(photo) {
      res.json({
        code: 0,
        msg: `${photo.name} upload success`
      });
    });
  });
});

router.get('/withAjax', function(req, res, next) {
  res.render('uploadWithAjax');
});

module.exports = router;
