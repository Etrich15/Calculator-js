const controller = require('../controllers/defaultController');

const express = require('express');
const router = express.Router();

router.get(['/', '/index', '/index.html'], controller.index);

module.exports = router;
