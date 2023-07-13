const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = [];

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", (req, res)=>{
    res.render("index", {NotesParse : items})
})

app.post("/", (req, res)=>{
    var item = req.body.notes;
    items.push(item);
    res.redirect("/");
})

app.listen(3000, () =>{
    console.log("SERVER is starting at Port at: http://localhost:3000");
})