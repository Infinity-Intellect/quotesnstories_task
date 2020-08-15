var mysql = require('mysql')
const dbConfig = require('../config/mysqlconfig')
var connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.db
})

connection.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Connected to mysql server as ${connection.threadId}`)
    }
})

module.exports = connection
