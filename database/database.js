const Sequelize = require('sequelize');

const dbEngine = process.env.DB_ENVIRONMENT || 'development';
const config = require('config')[dbEngine];

const connection = new Sequelize(config.get('DB_NAME'), config.get('DB_USERNAME'), config.get('DB_PASSWORD'), {
  host: config.get('DB_HOST'),
  dialect: 'postgres'
}).then(console.log("connected")).catch(console.error);

module.exports = connection;