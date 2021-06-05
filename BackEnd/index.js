const app = require('./config/express')();
const port = app.get('port');
const connection = require("./database/database");

//Database connection
connection
    .authenticate()
    .then(() => {
        console.log("Connected")
    })
    .catch(console.log);

app.listen(port, () => {
    console.log('Listening at ' + port)
});
