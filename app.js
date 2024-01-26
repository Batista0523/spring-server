
const express = require("express");
const cors = require("cors");
const app = express();
const events= require("./controllers/EventSpaceController")

app.use(cors());
app.use(express.json());
app.use("/events", events);


app.get("/", (req, res) => {
    res.send("Welcome to eventSpace /events to see data");
  });
app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "page"}})
})



module.exports = app;
