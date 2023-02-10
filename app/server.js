const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000
const mysql = require('mysql2')
const random_name = require('node-random-name')

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const conn = mysql.createConnection(config)

app.get('/', (req, res) => {
  conn.query(`INSERT INTO people (name) VALUES ('${random_name()}')`, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  conn.query(`SELECT name FROM people`, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }

    res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${results.map(people => `<li>${people.name}</li>`).join('')}
        </ul>
      `);
  });
})

app.listen(port, () => {
  console.log('Up on:', port);
})