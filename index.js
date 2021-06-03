const app = require('./config/express')();
const port = app.get('port');
const connection = require("./database/database");
const { Pool } = require('pg');

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


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});