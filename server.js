const express = require('express')
const sqldb = require('./connections/database')

const app = express();

function getPerson(){
    sqldb.execute('SELECT * from person').then(([rows, filedata]) => {
        console.log(rows);
    })
}

function insert(){
    
}
getPerson();

app.use((req, res) => {
    res.write('<h1>Hello from node</h1>')
});

app.listen(5000);