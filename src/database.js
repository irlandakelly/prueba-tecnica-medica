var Sequelize = require('sequelize');

const database = new Sequelize(
  'medica', // name database
  'medica', // user database
  'medica', // password database
  {
    host: 'localhost',
    dialect: 'postgres' // mariadb / sqlite / postgres
  }
);

database.sync();

module.exports = database;