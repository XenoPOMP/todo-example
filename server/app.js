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
//     functions reqUsername = req.body.reqUsername;

//     functions query = "SELECT users.user_id FROM xenochat.users WHERE users.username = (?)";
//     db.query(query, [reqUsername], (err, result) => {
//         res.send(result);
//     });
// });

app.get(`${prefix}/cards/getAll`, (req, res) => {
    const query = "SELECT * FROM todo_app.cards";
    db.query(query, (err, result) => {
        res.send(result);
    })
});

app.post(`${prefix}/cards/addNew`, (req, res) => {
    const reqText = req.body.reqText;
    const query = "INSERT INTO todo_app.cards (card_text) VALUES (?)";
    db.query(query, [reqText], (err, result) => res.send(result));
});

app.post(`${prefix}/cards/delete`, (req, res) => {
    const reqId = req.body.reqId;
    const query = "DELETE FROM cards WHERE `cards`.`card_id` = (?)";
    db.query(query, [reqId], (err, result) => res.send(result));
});

app.post(`${prefix}/cards/update`, (req, res) => {
    const reqId = req.body.reqId;
    const reqText = req.body.reqText;
    const query = "UPDATE `cards` SET `card_text` = (?) WHERE `cards`.`card_id` = (?)";
    db.query(query, [reqText, reqId], (err, result) => res.send(result));
});

// Start listening app at port 3001
app.listen(config.app_port, () => {
    console.log(`Server running on port ${config.app_port}`);
});