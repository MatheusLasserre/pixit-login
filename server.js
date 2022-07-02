const express = require('express');
const connectMySql = require('./database/connect');
const app = express();

// Using routes from outer file for organization purposes
const appRoutes = require('./routes/app');

// Connects to the database.
connectMySql();



// Loading auth-free routes
app.use('/', appRoutes)


// Starting Server
app.listen(3000, () => {
    console.log('Server is running.')
})