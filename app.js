const express = require("express");
const cors = require("cors");
const app = express();
const eventSpace = require("./controllers/EventSpaceController")

app.use(cors());
app.use(express.json());
app.use("/EventsSpace", eventSpace);

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "page"}})
})



module.exports = app;