const Sequelize = require("sequelize");
const connection = require("./database");
const Trade = require("./Trade");

const Card = connection.define('cards', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    offer: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    trade_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

});

Trade.hasMany(Card, { as: "cards" });
Card.belongsTo(Trade, {
  foreignKey: "trade_id",
  as: "trade",
});


Card.sync({force: false}).then(() =>{console.log("Created table")});

module.exports = Card;