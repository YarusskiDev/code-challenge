"use strict"
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const pessoaController = require('./pessoas/PessoaController');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const porta = 3000;

connection
  .authenticate()
  .then(() => {
    console.log("connected to database!");
  })
  .catch((msgError) => {
    console.log(msgError);
  });

app.use('/',pessoaController);

app.listen(porta, () => {
  console.log("Api is working");
});
