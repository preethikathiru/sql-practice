let mysql = require('mysql2')

const conn = require('../config/mySqlConnect');

async function selectExec(selectQuery){
    let connection = await mysql.createConnection({
        host: conn.host,
        user: conn.user,
        password: conn.password,
        database: conn.database,
        port : conn.port
    });
    const [rows,fields] = await connection.promise().execute(selectQuery);
    return rows;
    
    
}

module.exports = { selectExec}