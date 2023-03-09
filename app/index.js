const express = require('express');
const app = express()
const { faker } = require('@faker-js/faker');
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');

app.get('/', async (req, res) => {
    const connection = mysql.createConnection(config);
    const sql = `INSERT INTO people(nome) values ('${faker.name.fullName()}')`;
    connection.query(sql);   
    await connection.query("SELECT nome FROM people", (err, rows) => {
        const nomesHTML = [];
        rows.forEach(item => {
            nomesHTML.push(`<li>${item.nome}</li>`)
        });
        connection.end();
        const html = `<h1>Full Cycle Rocks!</h1> <ul>${nomesHTML.join('')}</ul>`
        res.send(html)
    })  
})

app.listen(port, () => {
    console.log('Rodando na porta: ' + port)
})