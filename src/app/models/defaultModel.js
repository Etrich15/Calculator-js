const config = require('../config');

const jsondb = require('simple-json-db');
const databaze = new jsondb('../data/database.json');

const bcrypt = require('bcryptjs');
const { use } = require('../routers/defaultRouter');