const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const ejs = require("ejs");
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:false}))
newItem = ["Buy Food","Cook Food","Eat Food"];

app.use(express.static("public"));
app.get("/",function(req,res){
  var x = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",


  };
  daY = x.toLocaleDateString(undefined,options);
  res.render("list",{typeDay:daY,array:newItem});

})
app.post("/pop",function(req,res){
  newItem.pop();
  res.redirect("/");
})
app.post("/",function(req,res){
  var dataTask = req.body.workItem;
  console.log(dataTask);
  if (dataTask.indexOf(' ')!=0) {
    newItem.push(dataTask);
  }


  console.log(newItem);
  res.redirect("/");
})

app.listen(3000,function(){
  console.log("Server connected at port number 3000");
})
