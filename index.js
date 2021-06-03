const app = require('./config/express')();
const port = app.get('port');
const connection = require("./database/database");
// const { Pool } = require('pg');

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


// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// app.get('/db', async (req, res) => {
//     try {
//       const client = await pool.connect();
//       const result = await client.query('SELECT * FROM test_table');
//       const results = { 'results': (result) ? result.rows : null};
//       res.send('pages/db', results );
//       client.release();
//     } catch (err) {
//       console.error(err);
//       res.send("Error " + err);
//     }
//   })