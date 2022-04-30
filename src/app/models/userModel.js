 const jsondb = require("simple-json-db");
 const db = new jsondb("../data/users.json");

 if (!db.has("nextid")) {
     db.set("nextid", 1);
 }

 exports.login = () => {
     
 }
 exports.register = (name, password) => {
    let id = db.get("nextid");
    db.set("nextid", id+1);
    db.set(id, {name, password});
 }

 exports.loadUsers = () => {
     const usersDb = db.JSON();
     delete usersDb.nextid;
     return usersDb;
 }