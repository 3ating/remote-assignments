const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
    } else if (number == "") {
        res.send(JSON.stringify({ sum: "Lack of Parameter" }));
    } else {
        res.send(JSON.stringify({ sum: "Wrong Parameter" }));
    }
});

app.get("/myName", (req, res) => {
    let userName = req.cookies.userName;
    if (userName) {
        res.send(`<h1>Welcome, ${userName}!</h1>`);
    } else {
        res.render("form");
    }
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
