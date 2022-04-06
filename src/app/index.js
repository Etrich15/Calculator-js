const config = require('../config');

const session = require('express-session');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.use(session({
    secret: config.sessionSecret,
    resave: true,
    saveUninitialized: true,
    cookie: {
        sameSite: 'strict',
        expires: 60000 * config.sessionTimeoutMinutes,
    }
}));

app.use(express.urlencoded({
    extended: false
}));

app.use(express.static('../public'));

app.use('/', require('./routers/defaultRouter'));

app.listen(8000, 'localhost', () => {
    console.log('Server běží na http://localhost:8000...');
});