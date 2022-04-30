const user = require("../models/userModel");

exports.login = (req, res) => {
    res.render("user/login");
}

exports.loginPost = (req, res) => {
    const name = req.body.name.trim();
    const password = req.body.password.trim();
    const usersAll = user.loadUsers();
    for(let i in usersAll) {
        if(usersAll[i].name == name && usersAll[i].password == password);
        console.log(usersAll[i].name);
        console.log(i);
        req.session.gypsi = i;
        req.session.gipsi =  true;
        return res.redirect("/");
    }
    res.redirect("/user/login");
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