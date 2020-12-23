let mysql = require('mysql2')

const conn = require('../config/mySqlConnect');

async function editQuery(editQuery){
    let connection = await mysql.createConnection({
        host: conn.host,
        user: conn.user,
        password: conn.password,
        database: conn.database,
        port : conn.port
    });
        try{
            const results = await connection.promise().execute(editQuery);
            return "success";
        }
        catch{
            return "unable to update data";
        }


    
 
    
}

module.exports = { editQuery}