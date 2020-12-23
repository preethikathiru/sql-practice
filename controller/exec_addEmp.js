let mysql = require('mysql2')

const conn = require('../config/mySqlConnect');

async function addQuery(addQuery){
    let connection = await mysql.createConnection({
        host: conn.host,
        user: conn.user,
        password: conn.password,
        database: conn.database,
        port : conn.port
    });
        try{
            const results = await connection.promise().execute(addQuery);
            return "success";
        }
        catch{
            return "unable to insert data";
        }


    
 
    
}

module.exports = { addQuery}