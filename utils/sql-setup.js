const mysql = require('mysql')


async function createInitialDB() {

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
    });

    connection.connect((err) => {
        if(err){
            console.log('Error:', err)
            return
        }

        console.log('MySql connected.', connection.threadId)
    })

    
    let initilDbQuery = 'CREATE DATABASE lasserrepixit'

    connection.query(initilDbQuery, (err, result) => {
        if(err){
            console.log('Setup database already exists. run "npm start" to start the application.')
            connection.destroy();
            return
        }

        console.log('Database created.', result)
        connection.destroy();

        return
    });

    return;
}

createInitialDB();