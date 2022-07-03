const connectMySql = require("../../database/connect");
const hashPassword = require("../password/hashPassword");
const validatePassword = require("../password/validatePassword");



async function createuser(user) {
    const connection = await connectMySql();
    const hashedPassword = await hashPassword(user.password);
    user.password = hashedPassword;
    user.email = user.email.toLowerCase();

    try {
        let sql = 'INSERT INTO users SET ?';
        connection.query(sql, user);
        return
    } catch (error) {
        throw error
    }



}

async function getUsers() {
    const connection = await connectMySql();

    try {
        let sql = 'SELECT * FROM users';
        // turning queries into promises to prevent unintended behavior
        return new Promise(function(resolve, reject){
            connection.query(sql, (err, result, fields) => {
                if(err) throw err;
                // Serializing received data and resolving the promise
                resolve(JSON.parse(JSON.stringify(result)));
            });

        })
    } catch (error) {
        throw error
    }
}

async function deleteUser(id) {
    
    const connection = await connectMySql();

    try {
        let sql = 'DELETE from users WHERE id = ?';
        // turning queries into promises to prevent unintended behavior
        return new Promise(function(resolve, reject){
            connection.query(sql, id, (err, result, fields) => {
                if(err) throw err;
                // Serializing received data and resolving the promise
                resolve(JSON.parse(JSON.stringify(result)));
            });

        })
    } catch (error) {
        throw error
    }
}

async function signInUser(user) {
    // validate user
    const connection = await connectMySql();

    try {
        let sql = 'SELECT * from users WHERE email = ?';

        // Checking if user exists
        const storedUser = await new Promise(function(resolve, reject){
            connection.query(sql, user.email, (err, result, fields) => {
                if(err) throw err;
                // Serializing received data and resolving the promise
                resolve(JSON.parse(JSON.stringify(result))[0]);
            });

        });
        if(!storedUser){
            throw new Error('Login Error. Check your login info.')
          
        }
        
        // matching password
        const passwordMatch = await validatePassword(user.password, storedUser.password);
        if(!passwordMatch){
            console.log('Password mismatch')
            throw new Error('Login Error. Check your login info.');
        }
        // deleting password and returning complete user
        delete storedUser.password;
        return storedUser;

    } catch (error) {
        console.log(error.message)
        connection.destroy();
        return null
    }

}



module.exports = { createuser, getUsers, deleteUser, signInUser }