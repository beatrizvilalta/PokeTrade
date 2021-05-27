const app = require('./config/express')();
const port = app.get('port');
const Sequelize = require("sequelize");
const connection = require("./database/database");
const Trade = require("./database/Trade");
const Card = require("./database/Card");

//Database connection
connection
    .authenticate()
    .then(() => {
        console.log("Connected")
    })
    .catch((errorMsg) => {
        console.log(errorMsg);
    });

app.listen(port, () => {
    console.log('Listening at ' + port)
});