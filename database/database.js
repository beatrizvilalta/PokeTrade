const Sequelize = require('sequelize');

const dbEngine = process.env.DB_ENVIRONMENT || 'development';
const config = require('config')[dbEngine];

const connection = new Sequelize('poketrade', config.get('DB_USERNAME'), config.get('DB_PASSWORD'), {
  host: config.get('DB_HOST'),
  dialect: 'postgres'
});

module.exports = connection;