const bcrypt = require('bcrypt');

async function validatePassword(password, storedPassword) {
    // Validate password and return results 

    return await bcrypt.compare(password, storedPassword);

}

module.exports = validatePassword