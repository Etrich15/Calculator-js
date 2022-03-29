const session = require('express-session');
const express = require('express');
const app = express();

app.listen(8000, 'localhost', () => {
    console.log('Server běží na http://localhost:8000...');
});