const express = require('express');
const connectMySql = require('./database/connect');
const app = express();
const cookieParser = require('cookie-parser');


// Using routes from outer file for organization purposes
const appRoutes = require('./routes/login');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');

// Connects to the database.
connectMySql();

// Tell express that we will pass data for some routes
// and its formated as strings or array -> that's why we use "extended: false"
app.use(express.urlencoded({ extended: false} ));

// Tell express to use Cookie Parser for storing jwt on browser cookies
app.use(cookieParser());

// Loading auth-free routes
app.use('/', appRoutes);

//Loading CSS files
app.use(express.static(__dirname + '/styles'));

// Loading admin auth routes
app.use('/admin', adminRoutes);

// Loading users API routes
app.use('/users', userRoutes);

// Setting EJS as view-engine for rendering
app.set('view-engine', 'ejs');




// Starting Server
app.listen(3000, () => {
    console.log('Server is running.');
})