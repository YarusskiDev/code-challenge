"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const porta = process.env.APP_PORT || 3000;

connection
  .authenticate()
  .then(() => {
    console.log("connected to database!");
  })
  .catch((msgError) => {
    console.log(msgError);
  });

app.use(routes);

app.listen(porta, () => {
  console.log("Api is working");
});
