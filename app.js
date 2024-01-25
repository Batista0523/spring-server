
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "page"}})
})


module.exports = app;

