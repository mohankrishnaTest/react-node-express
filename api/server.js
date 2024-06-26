const express = require('express')
var cors = require('cors')
var mysql = require('mysql');
const app = express()
const port = 4000
var bodyParser = require('body-parser')


app.use(cors())

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "test"
});



app.post('/create-user', cors(corsOptions), (req, res) => {

    firstname = req.body.firstname;
    lastname = req.body.lastname;
    email = req.body.email;
    phone = req.body.phone;
    post = req.body.post;


    var sql = `insert into user(firstname,lastname,email,phone,post) values('${firstname}','${lastname}','${email}','${phone}','${post}')`;
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('records is inserting,' + JSON.stringify(result));
        res.send(result);
    });
});




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})