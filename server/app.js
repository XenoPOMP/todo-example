// 1). - Execute
//       npm install express body-parser cors mysql
// 2). - Then, create config.json in the same directory, fill it with database data

// Creating Express app
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const prefix = `/api`;
// MySQL Database
const mysql = require('mysql');
const config = require('./config.json');
const db = mysql.createPool({
    hostname: config.hostname,
    user: config.user,
    password: config.password,
    database: config.database
});

// App use statements
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

// Sample POST request
// app.post('path', (req, res) => {
//     const reqUsername = req.body.reqUsername;

//     const query = "SELECT users.user_id FROM xenochat.users WHERE users.username = (?)";
//     db.query(query, [reqUsername], (err, result) => {
//         res.send(result);
//     });
// });

app.get(`${prefix}/cards/getAll`, (req, res) => {
    res.send([{"post_id" : 1, "post_text" : "Lorem"}, {"post_id" : 2, "post_text" : "ispum"}])
});

// Start listening app at port 3001
app.listen(config.app_port, () => {
    console.log(`Server running on port ${config.app_port}`);
});