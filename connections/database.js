const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    database: 'node-js',
    user: 'admin',
    password: 'Password@123',
});

module.exports = pool.promise()