const mysql = require('mysql');

// exporting connection function to prevent duplicated code across files
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
    })

    

    return connection
}

module.exports = connectMySql;
