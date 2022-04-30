const userController = require('../controllers/userController');

const express = require('express');
const router = express.Router();

router.get("/login" ,userController.login);
router.post("/login" ,userController.loginPost);
router.get("/register" ,userController.register);
router.post("/register" ,userController.registerPost);
router.post("/logout" ,userController.logoutPost);

module.exports = router;

