const mongoose = require('mongoose');
//creating schema model to go into database (how to store data)
const user = new mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    

});

module.exports = mongoose.model("Customers",user)