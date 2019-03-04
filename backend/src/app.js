// Import packages
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import logger from 'morgan';
import errorHandler from 'errorhandler';
import path from 'path';
import router from './routes';
import config from './config/config';
import User from './models/User';

// Connect to the database
mongoose.connect(config.db_url, { useNewUrlParser: true });

// Using the connection to the
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'There was an error while connecting'));

// Initialize express
const app = express();

// Set the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve the static assets
app.use(express.static(path.join(__dirname, 'public')));
// User the body parser
app.use(bodyParser.urlencoded({ extended: true }));
// Use the logger
app.use(logger('combined'));

// Configure passport
app.use(
    require('express-session')({
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Sending the user info to templates
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

// Routes
app.use('/', router);

// Use the error handler in development mode
if (config.env === 'development') {
    app.use(errorhandler());
}

// Open the server
app.listen(config.serverPort, console.log(`Your super server is running at port ${process.env.PORT}`));
