const mysql = require('mysql');

async function connectMySql() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'lasserrepixit'
    });

    connection.connect((err) => {
        if(err){
            console.log('Error:', err)
            return
        }

        console.log('Connected to lasserrepixit.', connection.threadId)
    })

    

    return connection
}

module.exports = connectMySql;
