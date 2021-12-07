const router = require("express").Router();
const test = require("./test")
const signUp = require('./signup')

//links router to 
router.use("/test", test)
router.use("/signup", signUp)




module.exports = router;

