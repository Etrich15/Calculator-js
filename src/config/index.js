const dotenv = require('dotenv');

dotenv.config();

exports.defaultAdminPassword = process.env.DEFAULT_ADMIN_PASSWORD;
exports.sessionSecret = process.env.SESSION_SECRET;
exports.sessionTimeoutMinutes = process.env.SESSION_TIMEOUT_MINUTES;
