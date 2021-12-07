const router = require('express').Router();
const users = require('../models/users');


router.get("/",(req,res)=>{
    // console.log(req)
    users.findOne({
        userName: "Danial"
    },(error,data)=>{ res.send(data) })   
    
    
    // res.send({
    //     message:"hello"
    // })


})

module.exports = router;
