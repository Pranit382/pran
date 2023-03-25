const express = require("express");
const bodyparser=require("body-parser");
const request =require("request")

const app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});
app.post("/",function(req,res){

var firstname=req.body.fname
var lastname=req.body.pass
console.log(firstname,lastname);

})




app.listen(3000,function(){
  console.log("The server is running on 3000");
});
