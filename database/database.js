const Sequelize = require('sequelize');

const dbEngine = process.env.DB_ENVIRONMENT;
const config = require('config')[dbEngine];

const connection = new Sequelize(config.get('DB_NAME'), config.get('DB_USERNAME'), config.get('DB_PASSWORD'), {
  host: config.get('DB_HOST'),
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  protocol: "postgres",
  // native: true,
  ssl: true,
  logging: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // <<<<<< YOU NEED THIS
    }
  }
});

module.exports = connection;