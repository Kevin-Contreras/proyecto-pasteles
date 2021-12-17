var express = require("express")
var router = express.Router()
router.get("/",function(req,res,next){
  res.end("<h1>Bienvenido a la pasteleria </h1>")
  next()
})

module.exports = router