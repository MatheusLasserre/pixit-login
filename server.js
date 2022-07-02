const express = require('express');
const connectMySql = require('./database/connect');
const app = express();

// Using routes from outer file for organization purposes
const appRoutes = require('./routes/app');
const adminRoutes = require('./routes/admin')

// Connects to the database.
connectMySql();



// Loading auth-free routes
app.use('/', appRoutes);

// Loading admin auth routes
app.use('/admin', adminRoutes)

// Setting EJS as view-engine for rendering
app.set('view-engine', 'ejs')


// Starting Server
app.listen(3000, () => {
    console.log('Server is running.')
})