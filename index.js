const express = require("express");
const app = express();
const path = require("path");
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
const motivation = require("motivation");
const { translate } = require('bing-translate-api');
const socket = require("socket.io")
const http = require("http");
const server = http.createServer(app);
const io = socket(server);

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");

server.listen(3000,function(){
    console.log("server is running ");
})


app.get("/",function(req,res){
    res.render("home");
})
app.get("/pomodoroTimer",function(req,res){
    res.render("pomodoroTimer");
})
app.get("/cgpaConversion",function(req,res){
    res.render("cgpaConversion");
})
app.get("/motivation",function(req,res){
    let quote = motivation.get();
    res.render("motivation",{quote:quote.text});
})


app.get("/translator",function(req,res){
    let ans;
    res.render("translator",{ans:ans});
})


io.on("connection",function(socket){
    socket.on("translate",function(text,language){
    translate(text || ".", null,language).then(res => {
    socket.emit("data",res.translation)
    }).catch(err => {
    console.error(err);
    });
    })
    console.log("connected");
})

