const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/getData", (req, res) => {
    let sum = 0;
    let number = req.query.number;
    let minValue = Number.MIN_VALUE;

    if (number > minValue) {
        for (let i = 0; i <= number; i++) {
            sum += i;
        }
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify({ sum: sum }));
    } else if (!number) {
        res.send("<h2 style='color: red'>Lack of Parameter</h2>");
    } else {
        res.send("<h2 style='color: red'>Wrong Parameter</h2>");
    }
});

// assignment 5
app.get("/myName", (req, res) => {
    let userName = req.cookies.userName;
    if (userName) {
        res.send(`<h1>Welcome, ${userName}!</h1>`);
    } else {
        res.render("form");
    }
});

app.get("/trackName", (req, res) => {
    let queryName = req.query.name;
    res.cookie("userName", queryName);
    res.redirect("/myName");
});

app.post("/trackName", (req, res) => {
    let userName = req.body.userName;
    res.cookie("userName", userName);
    res.redirect("/myName");
});

const port = 3000;

app.listen(port, () => {
    console.log(`Successed to connect localhost ${port}`);
});
