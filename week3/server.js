const express = require("express");
const app = express();

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
        res.set("Content-Type", "application/json");
        res.send(JSON.stringify({ sum: sum }));
    } else if (!number) {
        res.send("<h2 style='color: red'>Lack of Parameter</h2>");
    } else {
        res.send("<h2 style='color: red'>Wrong Parameter</h2>");
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Successed to connect localhost ${port}`);
});
