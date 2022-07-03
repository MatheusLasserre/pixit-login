const bcrypt = require('bcrypt');

async function hashPassword(password) {
    // Generate salt for password security
    const salt = await bcrypt.genSalt();

    // return hashed password
    return await bcrypt.hash(password, salt);
}

module.exports = hashPassword

