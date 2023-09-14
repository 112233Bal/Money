const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const app = express();


// Middleware
app.use(cors({
    origin: "*",
    methods: ["POST", "GET"],
    credentials: true,
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const middleware = (req, res, next) => {
    next();
};
app.use(middleware);

// Routes
app.get("/", (req, res) => {
    console.log('Connected'); // Log to the server console
    res.json("Hello");
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});