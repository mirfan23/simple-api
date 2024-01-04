const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'postgres', 'irfan3232', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;