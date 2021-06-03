const Sequelize = require("sequelize");
const connection = require("./database");

const Trade = connection.define('trades', {
    given_total_power: {
        type: Sequelize.INTEGER, 
        allowNull: false
    },
    offer_total_power: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

Trade.sync({force: false}).then(() =>{console.log("Created table")});

module.exports = Trade;