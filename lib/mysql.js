var mysql = require('mysql');

var pool = mysql.createPool({
    host     : process.env.HOST,
    user     : process.env.USERNAME,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    port     : process.env.PORT
});