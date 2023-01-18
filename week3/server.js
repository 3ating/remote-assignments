const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("./views", __dirname + "index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

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

        res.send(`The sum of 1 to ${number} is "${sum}".`);
    } else if (!number) {
        res.send("Lack of Parameter");
    } else {
        res.send("Wrong Parameter");
    }
});

app.post("/getData", (req, res) => {
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
        res.send(JSON.stringify({ sum: "Please input a number" }));
    } else {
        res.send(JSON.stringify({ sum: "Please input a number" }));
    }
});

app.get("/sum.html", (req, res) => {});

const port = 3000;

app.listen(port, () => {
    console.log(`Successed to connect localhost ${port}`);
});
