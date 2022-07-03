const mysql = require('mysql')
const util = require('util')

// Script for inicialize database, and create Tables.
async function createInitialDB() {

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
    });
    // Promisifying db operations for script sequence;
    const query = util.promisify(connection.query).bind(connection);
    const changeUser = util.promisify(connection.changeUser).bind(connection);

    connection.connect((err) => {
        if(err){
            console.log('Error:', err);
            return;
        }

        console.log('MySql connected.', connection.threadId);
    });

    
    let initilDbQuery = 'CREATE DATABASE lasserrepixit'
    await query(initilDbQuery);
        console.log('Database created. Proceding...');


    await changeUser({database: 'lasserrepixit'});
        console.log('Switched to Database. Creating TABLE...');


    let createUsersTable = 'CREATE TABLE users(id int AUTO_INCREMENT, name VARCHAR(45), email VARCHAR(255), password VARCHAR(255), PRIMARY KEY (id))';
    await query(createUsersTable);
    console.log('Users TABLE created. Proceding...');

    console.log('Setup completed. run "npm start" to start the application.');
    connection.destroy();
    return;

}

createInitialDB();