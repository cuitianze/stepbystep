var Sequelize = require('sequelize');
var sequelize = new Sequelize('db_photos', 'cuitianze', 'cuitianze', {
  host: 'pg-photo.ckxkjiu3mv6j.ap-northeast-1.rds.amazonaws.com',
  port: 5432,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }

});

module.exports = sequelize;
