const express = require("express");
const { json } = require("body-parser");
const createMail = require("./routes/sendEmail");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(json());

app.use((req, res, next) => {
  console.log("Received request:", req.method, req.url);
  next();
});

app.use(createMail);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

module.exports = app;
