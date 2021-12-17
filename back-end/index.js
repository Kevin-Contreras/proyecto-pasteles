var express = require("express")
var router = require("./router/router")
var app = express()

app.set("port",3001||process.env.PORT)
//middelwares
app.use(router)

//servidor
app.listen(app.get("port"),function(res,req){
  console.log("EL SERVIDOR ESTA CORRIENDO EN EL PUERTO "+app.get("port"))
})