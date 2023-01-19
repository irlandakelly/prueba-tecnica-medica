var Sequelize = require('sequelize');

const database = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASSWORD, 
  {
    host: 'database',
    dialect: 'postgres' 
  }
);

database.sync();

module.exports = database;