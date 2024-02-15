console.log("Web serverni boshlash");
const express = require("express");
const fs = require("fs");
const app = express();

//Mongodb object creation
const db = require('./server').db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish kodlari. The app.use() function is used to mount the specified middleware function(s) at the path that is being specified. It is mostly used to set up middleware for your application.
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //HTMLdan traditional request yuborsak, express serverimiz qabul qilib oladi

// 2: Session codes 
// 3: Views
app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); 

// 4: Routers
app.post("/create-item", function (req, res) {
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0])
  })
});

app.get("/", function (req, res) {
  db.collection("plans")
  .find()
  .toArray((err, data) => {
    if(err) {
      console.log(err)
      res.end("you screwed up")
    } else {
      res.render("reja", { items:data });
    }
  })
});

module.exports = app;