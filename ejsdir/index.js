// npm init -y --> default options set
// npm i ejs
// npm i express
// ejs.co

const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/style")));



app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views")); //views naam ka folder aapko kis directory me milega


// app.set("this is root", "ejs");

// app.get("/", (req,res) =>{
//     res.send("this is home");
// });




// 3.
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("home.ejs");
});



// 4. interpolation syntax


// 5. passing data to ejs -- rollDice.ejs
app.get("/rollDice", (req, res) => {
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rollDice.ejs",{diceVal});
});


// 6. instagram
// app.get("/ig/:username", (req,res) =>{
//     let { username} = req.params;
//     res.render("instagram.ejs", {username})
// });


// // 8. loops
// app.get("/ig/:username", (req,res) =>{
//     const followers = ["adam", "bob", "steve", "abc"];
//     let { username} = req.params;
//     res.render("instagram.ejs", {username, followers});
// });



// 9. instagram activity-- error free
app.get("/ig/:username",(req,res) => {
    let {username} = req.params;               //error begins
    const instaData = require("./data.json");
    const data = instaData [username];
    console.log(data);
    if (data) {
        res.render("instagram.ejs", {data});
    }else{
        res.render("error.ejs");
    }
});



// in last - listening port
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
