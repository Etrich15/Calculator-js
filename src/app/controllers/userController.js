const user = require("../models/userModel");

exports.login = (req, res) => {
    res.render("user/login");
}

exports.loginPost = (req, res) => {
    const name = req.body.name.trim();
    const password = req.body.password.trim();
    const Users = user.loadUsers();
    res.redirect("/");
}

exports.register = (req, res) => {
    res.render("user/register");
}

exports.registerPost = (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    user.register(name, password);
    
    res.redirect("/user/login");

}

exports.logoutPost = (req, res) => {
    
}