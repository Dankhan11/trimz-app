const router = require('express').Router();
//post send data through http request front end to backend 
router.post("/",(req,res)=>{
    console.log(req.body)
})

module.exports = router