const express = require("express");
const cors = require("cors");
const cardValidator = require("./controllers/cardValidator");

const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());

app.post("/", cardValidator);

app.use((err, req, res, next) => {
  res.status(400).json({
    data: err.message,
  });
});

module.exports = app;
