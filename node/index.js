const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

let markup = ""

const sqlQuery = `SELECT id, name FROM people`
connection.query(sqlQuery, (err, result) => {
    if (err) throw err;
    else {

        const data = Object.values(JSON.parse(JSON.stringify(result)));
        data.forEach(element => {
            markup+=`<p>${element.name}</p>\n`            
          });
        console.log(markup)
    }
})

connection.end()

app.get('/', (req, res) => {
    const response = `<h1>Full Cycle</h1>\n${markup}`
    res.send(response)
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})