const user = require("../models/userModel");

exports.login = (req, res) => {
    res.render("user/login");
}

exports.loginPost = (req, res) => {
    const name = req.body.name.trim();
    const password = req.body.password.trim();
    const usersAll = user.loadUsers();

    if(password.length == 0 || req.session.gipsi) {
        return res.redirect("/user/login");
    }
    for(let i in usersAll) {
        if(usersAll[i].name == name && usersAll[i].password == password){
            console.log(usersAll[i].name);
            console.log(i);
            req.session.gypsi = i;
            req.session.gipsi =  true;
            return res.redirect("/");
        }
        
    }
    res.redirect("/user/login");
}

exports.register = (req, res) => {

    res.render("user/register");
    
}

exports.registerPost = (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const usersAll = user.loadUsers();
    if(password.length == 0 || name.length == 0 || req.session.gipsi) {
        return res.redirect("/user/register");
    }
    for(let i in usersAll){
        if(usersAll[i].name == name) {
            return res.redirect("/user/register")
        }
    }

    user.register(name, password);
    
    res.redirect("/user/login");

}

exports.logoutPost = (req, res) => {
    req.session.gipsi = false;
    res.redirect('/');
}